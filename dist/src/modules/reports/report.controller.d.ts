import type { Request, Response } from "express";
export declare function dailyAttendanceReport(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function periodAttendanceReport(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function attendanceSummaryReport(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function employeeAttendanceReport(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function attendanceStatisticsReport(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function exportAttendanceCsv(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
