import type { Request, Response } from "express";
export declare function issueSessionRecovery(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function recoverEmployeeSession(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
