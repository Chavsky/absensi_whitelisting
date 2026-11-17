import "dotenv/config";
import app from "./app.js";
import { prisma } from "./config/database.js";
import { logSafeError } from "./utils/safe-error-logger.js";

const PORT = Number(process.env.PORT) || 3000;

async function startServer() {
  try {
    await prisma.$connect();

    console.log("PostgreSQL connected successfully");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Attendance API running on port ${PORT}`);
      console.log(`Health check: http://localhost:${PORT}/api/health`);
    });
  } catch (error) {
    logSafeError("SERVER STARTUP", error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

startServer();
