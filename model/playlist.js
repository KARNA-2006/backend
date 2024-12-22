import mongoose from "mongoose";
const playlistSchema= new mongoose.Schema([{
    playlistName : {
        type: String, 
        minlength: 4,
        trim: true, 
        required: true,
    },
    videoId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'video',
        required: true,
    },
    username : {
        type:mongoose.Schema.Types.ObjectId, 
        ref:'User', 
        required: true,
    },
    
}, {timestamps: true}])

export const Playlist= mongoose.model("Playlist",playlistSchema)