const mongoose=require("mongoose");
const Signup=new mongoose.Schema({
    id:{type:Number},
    first:{
        type:String
    },
    last:{type:String},
    email:{type:String},
    Language:{type:String},
    password:{type:String}
})
const user_details=mongoose.model('user_details',Signup)
module.exports=user_details