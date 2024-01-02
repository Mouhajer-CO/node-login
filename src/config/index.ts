import { checkEnvironmentValue } from "../utils/env";

export const SERVICE_NAME = 'node login middlewares';

// TODO: Validate
export const AUTH_COOKIE_SECRET = checkEnvironmentValue("AUTH_COOKIE_SECRET");
export const AUTH_COOKIE_NAME = checkEnvironmentValue("AUTH_COOKIE_NAME");
export const AUTH_SIGN_IN_URL = checkEnvironmentValue("AUTH_SIGN_IN_URL");
export const AUTH_SIGN_OUT_URL = checkEnvironmentValue("AUTH_SIGN_OUT_URL");