import { NextFunction, Request, Response } from "express";
import { User } from "../models/user";
import { NewUserBody } from "../types/types";
import { TryCatch } from "../middlewares/error";

export const newUser = TryCatch(
  async (
    req: Request<{}, {}, NewUserBody>,
    res: Response,
    next: NextFunction
  ) => {
    const { name, email, photo, gender, _id, dob } = req.body;

    let user = await User.findById(_id);

    if (user) {
      return res.status(200).json({
        success: true,
        message: `Welcome,${user.name}`,
      });
    }
    const user = await User.create({
      name,
      email,
      photo,
      gender,
      _id,
      dob: new Date(dob),
    });

    res.status(201).json({
      success: true,
      message: `Welcome,${user.name}`,
    });
  }
);
