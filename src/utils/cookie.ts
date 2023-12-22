import { Request } from 'express';
import cookie from 'cookie';
import cookieParser from 'cookie-parser';

import { COOKIE_SECRET, USER_TOKEN_NAME } from '../config';

export const getJwt = (req: Request) => {

  const cookieValue = req.cookies.get(USER_TOKEN_NAME);
  const parsedCookie = cookie.parse(`connect.sid=${cookieValue}`)['connect.sid'];

  // If the cookie is not a signed cookie, the parser will return the provided value
  const jwt = cookieParser.signedCookie(parsedCookie, COOKIE_SECRET);

  // TODO: Check returned value! 
  if (!jwt || jwt === 'undefined') {
    throw new Error(
      `Failed to verify signature for ${USER_TOKEN_NAME}, cookie value: ${cookieValue}`
    );
  }

  return jwt;
};