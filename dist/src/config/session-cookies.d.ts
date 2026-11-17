import "dotenv/config";
export declare const USER_SESSION_COOKIE_DURATION_MS: number;
export declare const COOKIE_SECURE: boolean;
export declare const ADMIN_SESSION_COOKIE_NAME = "admin_session";
export declare const USER_SESSION_COOKIE_NAME = "user_session";
export declare const adminSessionCookieOptions: {
    httpOnly: boolean;
    secure: boolean;
    sameSite: "strict";
    path: string;
    maxAge: number;
};
export declare const userSessionCookieOptions: {
    httpOnly: boolean;
    secure: boolean;
    sameSite: "strict";
    path: string;
    maxAge: number;
};
export declare const adminSessionCookieClearOptions: {
    httpOnly: boolean;
    secure: boolean;
    sameSite: "strict";
    path: string;
};
export declare const userSessionCookieClearOptions: {
    httpOnly: boolean;
    secure: boolean;
    sameSite: "strict";
    path: string;
};
