"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_POOL_CLIENT_ID = exports.USER_POOL_ID = exports.COOKIE_ID_NAME = exports.COOKIE_PARSER_SECRET = exports.SESSION_ID_NAME = exports.AUTH_SIGN_IN_URL = exports.AUTH_SIGN_IN_LANDING_PAGE_PARAM = exports.SESSION_APP_KEY = exports.SERVICE_NAME = void 0;
const env_1 = require("../utils/env");
exports.SERVICE_NAME = 'Authentication Middleware';
exports.SESSION_APP_KEY = (0, env_1.checkEnvironmentValue)('SESSION_APP_KEY', 'data');
exports.AUTH_SIGN_IN_LANDING_PAGE_PARAM = (0, env_1.checkEnvironmentValue)('AUTH_SIGN_IN_LANDING_PAGE_PARAM');
exports.AUTH_SIGN_IN_URL = (0, env_1.checkEnvironmentValue)('AUTH_SIGN_IN_URL');
exports.SESSION_ID_NAME = (0, env_1.checkEnvironmentValue)('SESSION_ID_NAME');
exports.COOKIE_PARSER_SECRET = (0, env_1.checkEnvironmentValue)('COOKIE_PARSER_SECRET');
exports.COOKIE_ID_NAME = (0, env_1.checkEnvironmentValue)('COOKIE_ID_NAME');
exports.USER_POOL_ID = (0, env_1.checkEnvironmentValue)('USER_POOL_ID');
exports.USER_POOL_CLIENT_ID = (0, env_1.checkEnvironmentValue)('USER_POOL_CLIENT_ID');
//# sourceMappingURL=index.js.map