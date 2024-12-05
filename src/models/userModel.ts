import mongoose, { Schema, Model, Document } from 'mongoose';

export interface IUser extends Document {
    name: string,
    email: string,
    password: string
}

const userSchema: Schema<IUser> = new Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String }
})

const userModel: Model<IUser> = mongoose.model("user", userSchema);
export default userModel;