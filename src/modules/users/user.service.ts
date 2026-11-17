import { createHash } from "node:crypto";
import { prisma } from "../../config/database.js";

type UserSessionState = {
  revokedAt: Date | null;
  expiresAt: Date | null;
  device: {
    status: string;
    user: { isActive: boolean };
  };
};

export function isUserSessionValid(session: UserSessionState, now = new Date()) {
  return (
    session.revokedAt === null &&
    (session.expiresAt === null || session.expiresAt > now) &&
    session.device.status === "active" &&
    session.device.user.isActive
  );
}

function hashSessionToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

export async function validateUserSession(token: string) {
  const tokenHash = hashSessionToken(token);
  const session = await prisma.userSession.findUnique({
    where: { tokenHash },
    include: {
      device: {
        include: { user: { select: { nik: true, namaLengkap: true, isActive: true } } },
      },
    },
  });

  if (!session || !isUserSessionValid(session)) {
    return null;
  }

  return {
    session,
    user: session.device.user,
  };
}

export async function updateUserSessionLastUsed(sessionId: number, now = new Date()) {
  return prisma.$transaction(async (tx) => {
    const session = await tx.userSession.updateMany({
      where: {
        id: sessionId,
        revokedAt: null,
        device: {
          is: {
            status: "active",
            user: { is: { isActive: true } },
          },
        },
      },
      data: { lastUsedAt: now },
    });
    if (session.count !== 1) return false;

    const device = await tx.userDevice.updateMany({
      where: {
        sessions: { some: { id: sessionId } },
        status: "active",
        user: { isActive: true },
      },
      data: { lastUsedAt: now },
    });
    return device.count === 1;
  });
}
