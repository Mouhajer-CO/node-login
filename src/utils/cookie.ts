import cookieParser from 'cookie-parser';
import cookie from 'cookie';

export const getCookieValue = (cookies: any, cookieName: string) => {
    return cookies.get(cookieName);
};

export const getParsedCookieValue = (cookieValue: any, cookieName: string) => {
    return cookie.parse(`${cookieName}=${cookieValue}`)[cookieName];
};

export const getUnsignedCookie = (parsedCookie: string, cookieSecret: string) => {
    return cookieParser.signedCookie(parsedCookie, cookieSecret);
};

export const validateUnsignedCookie = (unsignedCookie: string | false): boolean => {
    return !(!unsignedCookie || unsignedCookie === 'undefined');
};

export const getJwtFromCookie = (cookies: any, cookieName: string, cookieSecret: string): string | false => {
    const cookieValue = getCookieValue(cookies, cookieName);
    const parsedCookie = getParsedCookieValue(cookieValue, cookieName);
    return getUnsignedCookie(parsedCookie, cookieSecret);
};
