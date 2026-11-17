import type { Request, Response, NextFunction } from "express";
export declare function officeNetworkOnly(req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
