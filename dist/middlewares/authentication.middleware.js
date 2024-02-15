"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticationMiddleware = void 0;
const config_1 = require("../config");
const cookie_1 = require("../utils/cookie");
const logger_1 = require("../utils/logger");
const authenticationMiddleware = (req, res, next) => {
    // TODO: Add dynamic return-to params
    const redirectUri = `${config_1.AUTH_SIGN_IN_URL}/${config_1.AUTH_SIGN_IN_LANDING_PAGE_PARAM}`;
    const cookieValue = (0, cookie_1.getCookieValue)(req.cookies, config_1.SESSION_ID_NAME);
    const parsedCookie = (0, cookie_1.getParsedCookieValue)(cookieValue, config_1.SESSION_ID_NAME);
    const unsignedCookie = (0, cookie_1.getUnsignedCookie)(parsedCookie, config_1.COOKIE_PARSER_SECRET);
    if ((0, cookie_1.validateUnsignedCookie)(unsignedCookie)) {
        logger_1.log.debug(`Successfully verified signature for ${config_1.SESSION_ID_NAME}, cookie value: ${cookieValue}`);
    }
    else {
        logger_1.log.error(`Failed to verify signature for ${config_1.SESSION_ID_NAME}, cookie value: ${cookieValue}, redirect to ${redirectUri}`);
        return res.redirect(redirectUri);
    }
    next();
};
exports.authenticationMiddleware = authenticationMiddleware;
//# sourceMappingURL=authentication.middleware.js.map