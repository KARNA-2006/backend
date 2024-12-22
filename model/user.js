import mongoose from "mongoose";
const userSchema= new mongoose.Schema({
    userName:{
        type: String,
        required: true,
        minlength: 3,
        trim: true,
        lowercase: true,
        index: true,
    },
    userID:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
        match: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
    },
    phone:{
        type: Number,
        min: 10,
        max: 10,
    },
    password:{
        type: String,
        required: true,
        unique: true,
        minlength: 4,
        maxlength: 8,
        match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    },
    avatar:{
        type:String,
        required:true  
    },

    coverImage:{
        type:String, 
    },
    watchHistory:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Video"
    },
    liked:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "like",
    },
    uploaded:{
        type: Number,
    },
    subscribed:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "subscribe"
    }
},{timestamps: true})
export const User = mongoose.model("user",userSchema)