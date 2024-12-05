import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import userRouter from "./routes/userRouter";

const app = express();
app.use(express.json());

async function main() {
    try {
        const connection = await mongoose.connect("mongodb://localhost:27017/course-selling-website");
        if(connection) {
            console.log("Successfully connected to the database");
        }
    } catch (error) {
        console.log("Error occured during connection");
        process.exit(1);
    }
}

main();

app.use("/", (req: Request, res: Response) => {
    res.status(200).json("Welcome to the homepage");
})

app.use("/api/v1/user", userRouter);

app.listen(4000, () => {
    console.log("Server is listening on the port: 4000");
})