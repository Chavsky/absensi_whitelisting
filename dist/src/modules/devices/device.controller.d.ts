import type { Request, Response } from "express";
export declare function createEnrollment(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function activateDeviceController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
