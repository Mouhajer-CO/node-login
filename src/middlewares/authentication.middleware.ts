import { NextFunction, Request, Response } from 'express';

import {
    AUTH_SIGN_IN_LANDING_PAGE_PARAM,
    COOKIE_PARSER_SECRET,
    AUTH_SIGN_IN_URL,
    SESSION_ID_NAME
} from '../config';
import {
    getCookieValue,
    getUnsignedCookie,
    getParsedCookieValue,
    validateUnsignedCookie
} from '../utils/cookie';

import { log } from '../utils/logger';

export const authenticationMiddleware = ( req: Request, res: Response, next: NextFunction) => {

    // TODO: Add dynamic return-to params
    const redirectUri = `${AUTH_SIGN_IN_URL}/${AUTH_SIGN_IN_LANDING_PAGE_PARAM}`;

    const cookieValue = getCookieValue(req.cookies, SESSION_ID_NAME);
    const parsedCookie = getParsedCookieValue(cookieValue, SESSION_ID_NAME);
    const unsignedCookie = getUnsignedCookie(parsedCookie, COOKIE_PARSER_SECRET);

    if (validateUnsignedCookie(unsignedCookie)) {
        log.debug(`Successfully verified signature for ${SESSION_ID_NAME}, cookie value: ${cookieValue}`);
    } else {
        log.error(`Failed to verify signature for ${SESSION_ID_NAME}, cookie value: ${cookieValue}, redirect to ${redirectUri}`);
        return res.redirect(redirectUri);
    }

    next();
};
