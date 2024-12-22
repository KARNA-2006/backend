import mongoose from "mongoose";
const likeSchema= new mongoose.Schema({
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
    likeTime: {
        type: Date,
        default: Date.now,
    },
    count: {
        type: Number,
    }
},{timestamps:true})

export const Like= mongoose.model("like",likeSchema)  
