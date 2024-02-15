import { CognitoJwtVerifier } from "aws-jwt-verify";
import { USER_POOL_CLIENT_ID, USER_POOL_ID } from "../config";
import { log } from "./logger";

const jwtVerifier = CognitoJwtVerifier.create({
    userPoolId: USER_POOL_ID,
    clientId: USER_POOL_CLIENT_ID,
    tokenUse: "id"
});

export const verifyCognitoJwtVerifier = async (accessToken: string) => {
    try {
        log.debug(`Verifying accessToken: ${accessToken}`);
        return await jwtVerifier.verify(accessToken);
    } catch (err) {
        const error = `Failed to verify accessToken: ${accessToken}`;
        return new Error(error);
    }
}
