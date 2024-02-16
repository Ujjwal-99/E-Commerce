import mongoose from "mongoose";
import { InvalidateCacheType } from "../types/types";
import { myCache } from "../app";
import { Product } from "../models/products";

export const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017", {
      dbName: "Ecommerce_24",
    })
    .then((c) => console.log(`DB Connected to ${c.connection.host}`))
    .catch((e) => console.log(e));
};

export const invalidateCache = async ({
  product,
  admin,
  order,
}: InvalidateCacheType) => {
  if (product) {
    const productkeys: string[] = [
      "latest-products",
      "categories",
      "all-products",
    ];
    const products = await Product.find({}).select("_id");
    products.forEach((i) => {
      productkeys.push(`product-${i._id}`);
    });
    myCache.del(productkeys);
  }
  if (admin) {
  }
  if (order) {
  }
};
