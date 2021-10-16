import express from 'express';
import passport from 'passport';
import {ValidateSignup,ValidateSignin} from '../../Validation/auth';
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
        await ValidateSignup(req.body.credentials);
        //Check whether email or phone number exists
        await Usermodel.findByEmailAndPhone(req.body.credentials);


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

});
/*
Route         /sigin
Description   Sigin with email and password
Parameter     None
Access        Public
Method        POST
*/
Router.post("/signin", async (req, res) => {
    try {
        await ValidateSignin(req.body.credentials);
        const user = await Usermodel.findByEmailAndPassword( req.body.credentials );

 //JWT Auth Token

        const token = user.generateJwtToken();

        return res.status(200).json({token,status:"Succsess"});

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }

});

/*
Route         /google
Description   google Sigin 
Parameter     None
Access        Public
Method        GET
*/
Router.get("/google",passport.authenticate("google",{
    scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email"
      ],
}));
/*
Route         /google/callback
Descrip       Google Signin callback
Params        None
Access        Public
Method        GET
*/

Router.get("/google/callback", passport.authenticate("google",{failureRedirect: "/"}),
(req,res) => {
  return res.json({token: req.session.passport.user.token});
}
);
export default Router;
