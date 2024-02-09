import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../utils/utility-class";
import { ControllerType } from "../types/types";

export const errorMiddleware = (
  error: ErrorHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  error.message ||= "Internal Server Error";
  error.statusCode ||= 500;

  return res
    .status(error.statusCode)
    .json({ success: false, message: error.message });
};

export const TryCatch =
  (func: ControllerType) =>
  (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(func(req, res, next)).catch(next);
  };
