import "dotenv/config";
import type { Request, Response, NextFunction } from "express";
import type { CorsOptions } from "cors";
export declare const allowedCorsOrigins: Set<string>;
export declare function rejectDisallowedCorsOrigin(req: Request, res: Response, next: NextFunction): void | Response<any, Record<string, any>>;
export declare const corsOptions: CorsOptions;
