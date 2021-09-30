import express from 'express';
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
        //Check whether email or phone number exists
        await Usermodel.findEmailAndPhone(req.body.credentials);


        //hashing and salting
      

        //DB
     const newUser=await Usermodel.create({
            ...req.body.credentials,
        });

        //JWT Auth Token

        const token = newUser.generateJwtToken();

        return res.status(200).json({token});

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }

})
export default Router;
