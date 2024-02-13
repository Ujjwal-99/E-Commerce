"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newProduct = void 0;
const error_1 = require("../middlewares/error");
const products_1 = require("../models/products");
exports.newProduct = (0, error_1.TryCatch)(async (req, res, next) => {
    const { name, price, stock, category } = req.body;
    const photo = req.file;
    await products_1.Product.create({});
});
