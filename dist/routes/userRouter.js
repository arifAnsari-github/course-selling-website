"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const signupHandler_1 = __importDefault(require("../controllers/signupHandler"));
const userRouter = (0, express_1.Router)();
userRouter.post("/signup", signupHandler_1.default);
exports.default = userRouter;
