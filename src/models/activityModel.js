import mongoose, { Schema } from "mongoose";

const ActivitySchema = new Schema({
    type: String,
    data: Object,
    created_by: String,
} , { collation: { locale: 'en_US', strength: 2 }, timestamps: { createdAt: 'created_at' } });

export default mongoose.model('activity', ActivitySchema);