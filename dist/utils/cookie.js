"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJwtFromCookie = exports.validateUnsignedCookie = exports.getUnsignedCookie = exports.getParsedCookieValue = exports.getCookieValue = void 0;
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cookie_1 = __importDefault(require("cookie"));
const getCookieValue = (cookies, cookieName) => {
    return cookies.get(cookieName);
};
exports.getCookieValue = getCookieValue;
const getParsedCookieValue = (cookieValue, cookieName) => {
    return cookie_1.default.parse(`${cookieName}=${cookieValue}`)[cookieName];
};
exports.getParsedCookieValue = getParsedCookieValue;
const getUnsignedCookie = (parsedCookie, cookieSecret) => {
    return cookie_parser_1.default.signedCookie(parsedCookie, cookieSecret);
};
exports.getUnsignedCookie = getUnsignedCookie;
const validateUnsignedCookie = (unsignedCookie) => {
    return !(!unsignedCookie || unsignedCookie === 'undefined');
};
exports.validateUnsignedCookie = validateUnsignedCookie;
const getJwtFromCookie = (cookies, cookieName, cookieSecret) => {
    const cookieValue = (0, exports.getCookieValue)(cookies, cookieName);
    const parsedCookie = (0, exports.getParsedCookieValue)(cookieValue, cookieName);
    return (0, exports.getUnsignedCookie)(parsedCookie, cookieSecret);
};
exports.getJwtFromCookie = getJwtFromCookie;
//# sourceMappingURL=cookie.js.map