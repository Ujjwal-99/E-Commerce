"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminOnly = void 0;
const user_1 = require("../models/user");
const utility_class_1 = __importDefault(require("../utils/utility-class"));
const error_1 = require("./error");
// Used by admin only
exports.adminOnly = (0, error_1.TryCatch)(async (req, res, next) => {
    const { id } = req.query;
    if (!id)
        return next(new utility_class_1.default("Please Login", 401));
    const user = await user_1.User.findById(id);
    if (!user)
        return next(new utility_class_1.default("ID is not Correct", 401));
    if (user.role !== "admin")
        return next(new utility_class_1.default("You are not an Admin", 401));
    next();
});
