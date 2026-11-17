declare global {
  namespace Express {
    interface Request {
      admin?: {
        id: number;
        username: string;
      };
      user?: {
        nik: string;
        namaLengkap: string;
        sessionId: number;
      };
    }
  }
}

export {};
