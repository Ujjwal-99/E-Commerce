import { NextFunction, Request, Response } from "express";

export interface NewUserBody {
  name: string;
  email: string;
  photo: string;
  gender: string;

  _id: string;
  dob: Date;
}

export interface NewProductRequestBody {
  name: string;
  category: string;
  price: number;
  stock: number;
}

export type ControllerType = (
  req: Request<{}, {}, NewUserBody>,
  res: Response,
  next: NextFunction
) => Promise<void | Response<any, Record<string, any>>>;
