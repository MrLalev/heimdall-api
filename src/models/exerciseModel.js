import mongoose, { Schema } from "mongoose";

const ExerciseSchema = new Schema({
    private: Boolean,
    name: String,
    muscle_group: Array,
    description: String,
    created_by: String,
    video_materials: String,
} , { collation: { locale: 'en_US', strength: 2 }, timestamps: { createdAt: 'created_at' } });

export default mongoose.model('exercise', ExerciseSchema);