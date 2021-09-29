import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
const Router = express.Router();

//Models 
import { Usermodel } from "../../database/user";

/*
Route         /signup
Description   Signup with email and password
Parameter     None
Access        Public
Method        POST
*/

Router.post("/signup", async (req, res) => {
    try {
        const { email, password, fullname, phoneNumber } = req.body.credentials;
        //Check whether email or phone number exists
        const checkUserByEmail = await Usermodel.findOne({ email });
        const checkUserByPhone = await Usermodel.findOne({ phoneNumber });

        if (checkUserByEmail || checkUserByPhone) {
            return res.json({ error: "User already Exists" });
        }

        //hashing and salting
        const bcryptSalt = await bcrypt.genSalt(8);

        const hashedPassword = await bcrypt.hash(password, bcryptSalt);

        //DB
        await Usermodel.create({
            ...req.body.credentials,
            password: hashedPassword
        });

        //JWT Auth Token

        const token = jwt.sign({ user: { fullname, email } }, "ZomatoApp");

        return res.status(200).json({token});

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }

})
export default Router;
