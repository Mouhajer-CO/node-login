"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkEnvironmentValue = void 0;
const checkEnvironmentValue = (envKey, defaultValue) => {
    var _a;
    const envValue = (_a = process.env[envKey]) === null || _a === void 0 ? void 0 : _a.trim();
    if (envValue) {
        return envValue;
    }
    if (defaultValue) {
        return defaultValue;
    }
    throw new Error(`No environment variable set for ${envKey}`);
};
exports.checkEnvironmentValue = checkEnvironmentValue;
//# sourceMappingURL=env.js.map