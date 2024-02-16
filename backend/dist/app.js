"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myCache = void 0;
const express_1 = __importDefault(require("express"));
// importing routes
const user_js_1 = __importDefault(require("./routes/user.js"));
const products_js_1 = __importDefault(require("./routes/products.js"));
const features_js_1 = require("./utils/features.js");
const error_js_1 = require("./middlewares/error.js");
const node_cache_1 = __importDefault(require("node-cache"));
const port = 4000;
(0, features_js_1.connectDB)();
exports.myCache = new node_cache_1.default();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Api working with /api/v1");
});
// using Routes
app.use("/api/v1/user", user_js_1.default);
app.use("/api/v1/product", products_js_1.default);
// app.use("/api/v1/order", orderRoute);
app.use("/uploads", express_1.default.static("uploads"));
app.use(error_js_1.errorMiddleware);
app.listen(port, () => {
    console.log(`Server is working on http://localhost:${port}`);
});
