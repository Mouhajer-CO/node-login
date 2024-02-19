"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.colaAuthenticationMiddleware = void 0;
const config_1 = require("../../config");
const cookie_1 = require("../../utils/cookie");
const logger_1 = require("../../utils/logger");
const colaAuthenticationMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const cookieSignedValue = (0, cookie_1.getCookieValue)(req.signedCookies, config_1.COOKIE_ID_NAME);
    const unsignedCookie = (0, cookie_1.getUnsignedCookie)(cookieSignedValue, config_1.COOKIE_PARSER_SECRET);
    if ((0, cookie_1.validateUnsignedCookie)(unsignedCookie)) {
        logger_1.log.debug(`Successfully verified signature for ${config_1.COOKIE_ID_NAME}, cookie value: ${unsignedCookie}`);
    }
    else {
        logger_1.log.error(`Failed to verify signature for ${config_1.COOKIE_ID_NAME}, cookie value: ${cookieSignedValue}, redirect to ${config_1.AUTH_SIGN_IN_URL}`);
        return res.redirect(config_1.AUTH_SIGN_IN_URL);
    }
    next();
});
exports.colaAuthenticationMiddleware = colaAuthenticationMiddleware;
//# sourceMappingURL=authentication.middleware.js.map