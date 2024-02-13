"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    _id: {
        type: String,
        required: [true, "Please Enter ID"],
    },
    name: {
        type: String,
        required: [true, "Please Enter Name"],
    },
    photo: {
        type: String,
        required: [true, "Please Enter Photo"],
    },
    price: {
        type: Number,
        required: [true, "Please Enter Price"],
    },
    stock: {
        type: Number,
        required: [true, "Please Enter Stock"],
    },
    category: {
        type: String,
        required: [true, "Please Enter Category"],
    },
}, {
    timestamps: true,
});
exports.Product = mongoose_1.default.model("Product", schema);
