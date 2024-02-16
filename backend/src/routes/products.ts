import express from "express";
import { adminOnly } from "../middlewares/auth";
import {
  deleteProduct,
  getAdminProducts,
  getAllCategories,
  getAllProducts,
  getLatestProducts,
  getSingleProduct,
  newProduct,
  updateProduct,
} from "../controllers/products";
import { singleUpload } from "../middlewares/multer";

const app = express.Router();

app.post("/new", adminOnly, singleUpload, newProduct);
app.get("/all", getAllProducts);

app.get("/latest", getLatestProducts);
app.get("/categories", getAllCategories);
app.get("/admin-products", getAdminProducts);

app
  .route("/:id")
  .get(getSingleProduct)
  .put(adminOnly, singleUpload, updateProduct)
  .delete(adminOnly, deleteProduct);
export default app;
