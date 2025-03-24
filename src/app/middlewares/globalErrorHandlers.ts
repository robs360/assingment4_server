import { NextFunction, Request, Response } from "express";
import { StatusCodes, getReasonPhrase } from "http-status-codes";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const message = err.message || getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR);

  res.status(statusCode).json({
    success: false,
    message,
    statusCode,
    error: err instanceof Error ? err.stack : err, 
  });
};

export default globalErrorHandler;