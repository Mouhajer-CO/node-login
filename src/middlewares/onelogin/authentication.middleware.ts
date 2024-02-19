import { NextFunction, Request, Response } from 'express';

import { AUTH_SIGN_IN_URL, COOKIE_ID_NAME } from '../../config';

import { log } from '../../utils/logger';

export const authenticationMiddleware = async ( req: Request, res: Response, next: NextFunction) => {

    log.error(`TBD: work in progress ${COOKIE_ID_NAME}, cookie value: ${req.signedCookies}, redirect to ${AUTH_SIGN_IN_URL}`);

    // TBD: logic here ...

    next();
};
