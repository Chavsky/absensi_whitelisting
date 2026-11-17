export declare function createSessionRecoveryCode(nik: string, adminId: number): Promise<{
    code: string;
    expiresAt: Date;
    deviceId: number;
}>;
export declare function redeemSessionRecoveryCode(nik: string, submittedCode: string, ipAddress?: string, userAgent?: string): Promise<{
    token: string;
    expiresAt: null;
    sessionId: number;
}>;
