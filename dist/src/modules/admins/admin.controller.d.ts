import type { Request, Response } from "express";
export declare function listAdmins(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getAdmin(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function createAdmin(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateAdmin(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateAdminStatus(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateAdminPassword(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
