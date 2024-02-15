"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const logging_1 = require("@co-digital/logging");
const config_1 = require("../config");
let logger = undefined;
exports.log = !logger ? (logger = (0, logging_1.createLogger)(config_1.SERVICE_NAME)) : logger;
//# sourceMappingURL=logger.js.map