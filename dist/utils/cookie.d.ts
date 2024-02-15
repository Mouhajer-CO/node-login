export declare const getCookieValue: (cookies: any, cookieName: string) => any;
export declare const getParsedCookieValue: (cookieValue: any, cookieName: string) => string;
export declare const getUnsignedCookie: (parsedCookie: string, cookieSecret: string) => string | false;
export declare const validateUnsignedCookie: (unsignedCookie: string | false) => boolean;
export declare const getJwtFromCookie: (cookies: any, cookieName: string, cookieSecret: string) => string | false;
