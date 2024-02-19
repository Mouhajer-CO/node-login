"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUnsignedCookie = exports.getUnsignedCookie = exports.getCookieValue = void 0;
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const getCookieValue = (cookies, cookieName) => {
    return cookies[cookieName];
};
exports.getCookieValue = getCookieValue;
const getUnsignedCookie = (parsedCookie, cookieSecret) => {
    return cookie_parser_1.default.signedCookie(parsedCookie, cookieSecret);
};
exports.getUnsignedCookie = getUnsignedCookie;
const validateUnsignedCookie = (unsignedCookie) => {
    return !(!unsignedCookie || unsignedCookie === 'undefined');
};
exports.validateUnsignedCookie = validateUnsignedCookie;
//# sourceMappingURL=cookie.js.map