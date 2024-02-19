"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeSessionData = exports.setSessionData = exports.getSessionData = void 0;
const config_1 = require("../config");
const getSessionData = (session) => {
    return (session === null || session === void 0 ? void 0 : session[config_1.SESSION_APP_KEY]) || {};
};
exports.getSessionData = getSessionData;
const setSessionData = (session, appData) => {
    return session[config_1.SESSION_APP_KEY] = Object.assign({}, appData);
};
exports.setSessionData = setSessionData;
const removeSessionData = (session) => {
    session[config_1.SESSION_APP_KEY] = null;
};
exports.removeSessionData = removeSessionData;
//# sourceMappingURL=session.js.map