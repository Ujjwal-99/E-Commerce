import { NextFunction, Request, Response } from "express";

export interface NewUserBody {
  name: string;
  email: string;
  photo: string;
  gender: string;

  _id: string;
  dob: Date;
}

export type ControllerType = (
  req: Request<{}, {}, NewUserBody>,
  res: Response,
  next: NextFunction
) => Promise<void>;
