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
exports.verifyCognitoJwtVerifier = void 0;
const aws_jwt_verify_1 = require("aws-jwt-verify");
const config_1 = require("../config");
const logger_1 = require("./logger");
const jwtVerifier = aws_jwt_verify_1.CognitoJwtVerifier.create({
    userPoolId: config_1.USER_POOL_ID,
    clientId: config_1.USER_POOL_CLIENT_ID,
    tokenUse: "id"
});
const verifyCognitoJwtVerifier = (accessToken) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        logger_1.log.debug(`Verifying accessToken: ${accessToken}`);
        return yield jwtVerifier.verify(accessToken);
    }
    catch (err) {
        const error = `Failed to verify accessToken: ${accessToken}`;
        return new Error(error);
    }
});
exports.verifyCognitoJwtVerifier = verifyCognitoJwtVerifier;
//# sourceMappingURL=cognitoJwtVerifier.js.map