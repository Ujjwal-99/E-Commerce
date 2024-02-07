import { NextFunction, Request, Response } from "express";
import { User } from "../models/user";
import { NewUserBody } from "../types/types";

export const newUser = async (
  req: Request<{}, {}, NewUserBody>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, photo, gender, _id, dob } = req.body;

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
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};
