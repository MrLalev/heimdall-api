import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
} , { collation: { locale: 'en_US', strength: 2 }, timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'} });

export default mongoose.model('user', UserSchema);