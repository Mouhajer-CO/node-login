"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLoggedInUserEmail = void 0;
const getSessionData = (session, key) => {
    var _a;
    return (_a = session === null || session === void 0 ? void 0 : session.data) === null || _a === void 0 ? void 0 : _a[key];
};
const getLoggedInUserEmail = (session, key) => {
    const signInInfo = getSessionData(session, key);
    return signInInfo.email;
};
exports.getLoggedInUserEmail = getLoggedInUserEmail;
//# sourceMappingURL=session.js.map