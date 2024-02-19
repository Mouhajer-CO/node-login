export declare const getCookieValue: (cookies: any, cookieName: string) => any;
export declare const getUnsignedCookie: (parsedCookie: string, cookieSecret: string) => string | false;
export declare const validateUnsignedCookie: (unsignedCookie: string | false) => boolean;
