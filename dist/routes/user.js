"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userModel_1 = __importDefault(require("../models/userModel"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userRouter = (0, express_1.Router)();
userRouter.post("/signup", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, email, password } = req.body;
        try {
            if (!name || !email || !password) {
                res.status(400).json({ message: "Incomeplete credentials" });
            }
            const existingUser = yield userModel_1.default.findOne({ email: email });
            if (existingUser) {
                res.status(409).json({ message: "Already existing user" });
            }
            const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
            const newUser = new userModel_1.default({ name, email, password: hashedPassword });
            yield newUser.save();
        }
        catch (error) {
            res.status(500).json({ message: "Error occured during registration" });
        }
    });
});
exports.default = userRouter;
