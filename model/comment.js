import mongoose from "mongoose";
const commentSchema= new mongoose.Schema({
    username : {
        type:mongoose.Schema.Types.ObjectId, 
        ref:'User', 
        required: true,
    },
    videoId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'video',
            required: true,
    },
    Comment: {
        type: String,
        min: 1,
    },
    commentTime: {
        type: Date,
        default: Date.now,
    },
},{timestamps: true})
export const Comment= mongoose.model("comment",commentSchema)