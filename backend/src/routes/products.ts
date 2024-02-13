import express from "express";
import { adminOnly } from "../middlewares/auth";
import { newProduct } from "../controllers/products";
import { singleUpload } from "../middlewares/multer";

const app = express.Router();

app.post("/new", singleUpload, newProduct);

export default app;