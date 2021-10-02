import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    adress: [{ details: { type: String }, for: { type: String } }],
    phoneNumber: [{ type: Number }]
},
    {
        timestamps: true
    })
//generate jwt token
UserSchema.methods.generateJwtToken = function () {
    return jwt.sign({ user: this._id.toString() }, "ZomatoApp");
};
UserSchema.statics.findByEmailAndPhone = async ({ email, phoneNumber }) => {
    //check whether the email exists
    const checkUserByEmail = await Usermodel.findOne({ email });
    //check whether the phoneNumber Exists
    const checkUserByPhone = await Usermodel.findOne({ phoneNumber });
    if (checkUserByEmail || checkUserByPhone) {
        throw new Error("User already exist");
    }
    return false;
}


UserSchema.statics.findByEmailAndPassword = async ({ email, password }) => {
    //check whether the user exists
    const user = await Usermodel.findOne({ email });
    console.log(user);
    if (!user) throw Error("User Does Not Exist")
    //compare password
    const doesPasswordMatch = await bcrypt.compare(password, user.password)
    if (!doesPasswordMatch) {
        throw new Error("Invalid Pasword");
    }
    return user;
}
UserSchema.pre("save", function (next) {
    const user = this; //ippolulla user

    //password isnot modified
    if (!user.isModified("password")) return next();

    bcrypt.genSalt(8, (error, salt) => {
        if (error) return next(error);
        //hashing the password
        bcrypt.hash(user.password, salt, (error, hash) => {
            if (error) return next(error);

            //assigning hashed password
            user.password = hash;
            return next();
        });

    })

})
export const Usermodel = mongoose.model("Users", UserSchema);