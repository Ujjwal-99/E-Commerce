"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.invalidateCache = exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = require("../app");
const products_1 = require("../models/products");
const connectDB = () => {
    mongoose_1.default
        .connect("mongodb://localhost:27017", {
        dbName: "Ecommerce_24",
    })
        .then((c) => console.log(`DB Connected to ${c.connection.host}`))
        .catch((e) => console.log(e));
};
exports.connectDB = connectDB;
const invalidateCache = async ({ product, admin, order, }) => {
    if (product) {
        const productkeys = [
            "latest-products",
            "categories",
            "all-products",
        ];
        const products = await products_1.Product.find({}).select("_id");
        products.forEach((i) => {
            productkeys.push(`product-${i._id}`);
        });
        app_1.myCache.del(productkeys);
    }
    if (admin) {
    }
    if (order) {
    }
};
exports.invalidateCache = invalidateCache;
