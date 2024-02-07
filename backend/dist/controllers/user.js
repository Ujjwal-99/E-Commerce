"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newUser = void 0;
const user_1 = require("../models/user");
const newUser = async (req, res, next) => {
    try {
        const { name, email, photo, gender, _id, dob } = req.body;
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
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error,
        });
    }
};
exports.newUser = newUser;
