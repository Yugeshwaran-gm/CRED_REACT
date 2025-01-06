import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    age: {
        type:Number,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    }
});

export default mongoose.model("users", userSchema);