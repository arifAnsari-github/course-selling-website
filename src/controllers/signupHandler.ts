import { Request, Response } from 'express';
import userModel from "../models/userModel";
import bcrypt from 'bcryptjs';
import { IUser } from "../models/userModel";

const handleSignup = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password } = req.body;

        if(!name || !email || !password) {
             res.status(400).json({ message: "Incomplete credentials"});
        }
        const existingUser = await userModel.findOne({ email: email });
        if(existingUser) {
                 res.status(409).json({ message: "Email already in use"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser: IUser  = await new userModel({ name, email, password: hashedPassword });
        const savedUser = await newUser.save();

         res.status(201).json({
             message: "User successfully created", 
             userDetails: {
                  userID: savedUser._id,
                  name: savedUser.name,
                  email: savedUser.email
             }
        })
   } catch (error) {
        console.error("signup error", error)
         res.status(500).json({ message: "Error occured during registration "});
   }
}

export default handleSignup;