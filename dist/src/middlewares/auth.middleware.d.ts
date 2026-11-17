import type { Request, Response, NextFunction } from "express";
export declare function authenticateAdmin(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
type UserAuthSession = {
    session: {
        id: number;
        lastUsedAt: Date | null;
    };
    user: {
        nik: string;
        namaLengkap: string;
    };
};
export declare function createUserAuthenticator(validateSession?: (token: string) => Promise<UserAuthSession | null>, updateLastUsed?: (sessionId: number, now?: Date) => Promise<boolean>): (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
export declare const authenticateUser: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
export {};
