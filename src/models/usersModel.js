import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    personal_trainings: Array,
    shared_trainings: Array,
    personal_data: {
        weight: Number,
        gender: String,
        height: Number,
        birthday: String,
        country: String,
        description: String,
        metric_type: String,
    },
    posts: Array,
    followers: Array,
    following: Array,
} , { collation: { locale: 'en_US', strength: 2 }, timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'} });

export default mongoose.model('user', UserSchema);