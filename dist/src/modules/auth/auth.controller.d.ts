import type { Request, Response } from "express";
export declare function login(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function profile(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function createAdminLogoutHandler(revokeSession?: (token: string) => Promise<unknown>): (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const logout: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
