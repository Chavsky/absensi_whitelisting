export declare const AttendanceSource: {
    readonly LEGACY: 'LEGACY';
    readonly PWA: 'PWA';
    readonly ADMIN: 'ADMIN';
};
export type AttendanceSource = (typeof AttendanceSource)[keyof typeof AttendanceSource];
export declare const DeviceStatus: {
    readonly pending: 'pending';
    readonly active: 'active';
    readonly revoked: 'revoked';
};
export type DeviceStatus = (typeof DeviceStatus)[keyof typeof DeviceStatus];
