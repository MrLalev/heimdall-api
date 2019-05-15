import mongoose, { Schema } from "mongoose";

const TrainingSchema = new Schema({
    private: Boolean,
    exercises: Array,
    created_by: String,
    name: String,
    relative_time: Number,
    shared_with: Array,
} , { collation: { locale: 'en_US', strength: 2 }, timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

export default mongoose.model('training', TrainingSchema);