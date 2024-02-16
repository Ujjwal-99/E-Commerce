import express from "express";

// importing routes
import userRoute from "./routes/user.js";
import productRoute from "./routes/products.js";
import orderRoute from "./routes/order.js";
import {} from "dotenv";

import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";
import NodeCache from "node-cache";
const port = 4000;

connectDB();

export const myCache = new NodeCache();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api working with /api/v1");
});

// using Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
// app.use("/api/v1/order", orderRoute);

app.use("/uploads", express.static("uploads"));

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});
