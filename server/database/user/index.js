import  mongoose  from "mongoose";

const UserSchema = new mongoose.Schema({
    fullname:{type:String,required : true},
    email:{type:String,required:true},
    password:{type:String},
    adress:[{details:{type:String},for:{type:String}}],
    phoneNumber:[{type:Number}]
})

export const Usermodel = mongoose.model("Users",UserSchema);