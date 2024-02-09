"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newUser = void 0;
const user_1 = require("../models/user");
const error_1 = require("../middlewares/error");
exports.newUser = (0, error_1.TryCatch)(async (req, res, next) => {
    const { name, email, photo, gender, _id, dob } = req.body;
    let user = await user_1.User.findById(_id);
    if (user) {
        return res.status(200).json({
            success: true,
            message: `Welcome,${user.name}`,
        });
    }
    const user = await user_1.User.create({
        name,
        email,
        photo,
        gender,
        _id,
        dob: new Date(dob),
    });
    res.status(201).json({
        success: true,
        message: `Welcome,${user.name}`,
    });
});
