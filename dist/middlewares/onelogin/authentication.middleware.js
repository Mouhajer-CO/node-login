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
exports.authenticationMiddleware = void 0;
const config_1 = require("../../config");
const logger_1 = require("../../utils/logger");
const authenticationMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    logger_1.log.error(`TBD: work in progress ${config_1.COOKIE_ID_NAME}, cookie value: ${req.signedCookies}, redirect to ${config_1.AUTH_SIGN_IN_URL}`);
    // TBD: logic here ...
    next();
});
exports.authenticationMiddleware = authenticationMiddleware;
//# sourceMappingURL=authentication.middleware.js.map