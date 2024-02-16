"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middlewares/auth");
const products_1 = require("../controllers/products");
const multer_1 = require("../middlewares/multer");
const app = express_1.default.Router();
app.post("/new", auth_1.adminOnly, multer_1.singleUpload, products_1.newProduct);
app.get("/all", products_1.getAllProducts);
app.get("/latest", products_1.getLatestProducts);
app.get("/categories", products_1.getAllCategories);
app.get("/admin-products", products_1.getAdminProducts);
app
    .route("/:id")
    .get(products_1.getSingleProduct)
    .put(auth_1.adminOnly, multer_1.singleUpload, products_1.updateProduct)
    .delete(auth_1.adminOnly, products_1.deleteProduct);
exports.default = app;
