"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const globalErrorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;
    const message = err.message || (0, http_status_codes_1.getReasonPhrase)(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR);
    res.status(statusCode).json({
        success: false,
        message,
        statusCode,
        error: err instanceof Error ? err.stack : err,
    });
};
exports.default = globalErrorHandler;
