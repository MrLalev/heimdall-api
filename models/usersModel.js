import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
} , { collation: { locale: 'en_US', strength: 2 } });

export default mongoose.model('user', UserSchema);