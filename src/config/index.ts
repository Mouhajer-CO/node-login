import { checkEnvironmentValue } from '../utils/env';

export const SERVICE_NAME = 'Authentication Middleware';
export const SESSION_APP_KEY = checkEnvironmentValue('SESSION_APP_KEY', 'data');

export const AUTH_SIGN_IN_LANDING_PAGE_PARAM = checkEnvironmentValue('AUTH_SIGN_IN_LANDING_PAGE_PARAM');
export const AUTH_SIGN_IN_URL = checkEnvironmentValue('AUTH_SIGN_IN_URL');

export const SESSION_ID_NAME = checkEnvironmentValue('SESSION_ID_NAME');
export const COOKIE_PARSER_SECRET = checkEnvironmentValue('COOKIE_PARSER_SECRET');
export const COOKIE_ID_NAME = checkEnvironmentValue('COOKIE_ID_NAME');

export const USER_POOL_ID = checkEnvironmentValue('USER_POOL_ID');
export const USER_POOL_CLIENT_ID = checkEnvironmentValue('USER_POOL_CLIENT_ID');
