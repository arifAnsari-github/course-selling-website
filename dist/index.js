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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const userRouter_1 = __importDefault(require("./routes/userRouter"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const connection = yield mongoose_1.default.connect("mongodb://localhost:27017/course-selling-website");
            if (connection) {
                console.log("Successfully connected to the database");
            }
        }
        catch (error) {
            console.log("Error occured during connection");
            process.exit(1);
        }
    });
}
main();
app.get("/", (req, res) => {
    res.status(200).json("Welcome to the homepage");
});
app.use("/api/v1/user", userRouter_1.default);
app.listen(4000, () => {
    console.log("Server is listening on the port: 4000");
});
