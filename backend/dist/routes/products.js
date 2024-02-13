"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_1 = require("../controllers/products");
const multer_1 = require("../middlewares/multer");
const app = express_1.default.Router();
app.post("/new", multer_1.singleUpload, products_1.newProduct);
exports.default = app;
