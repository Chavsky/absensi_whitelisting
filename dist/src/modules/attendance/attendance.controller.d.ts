import type { Request, Response } from "express";
export declare function createAttendance(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function getTodayAttendance(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function getAttendanceHistory(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
