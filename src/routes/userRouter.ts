import { Router, Request, Response } from 'express';
import handleSignup from '../controllers/signupHandler';

const userRouter = Router();

userRouter.post("/signup", handleSignup);

export default userRouter;