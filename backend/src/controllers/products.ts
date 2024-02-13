import { Request } from "express";
import { TryCatch } from "../middlewares/error";
import { NewProductRequestBody } from "../types/types";
import { Product } from "../models/products";

export const newProduct = TryCatch(
  async (req: Request<{}, {}, NewProductRequestBody>, res, next) => {
    const { name, price, stock, category } = req.body;
    const photo = req.file;
    await Product.create({});
  }
);
