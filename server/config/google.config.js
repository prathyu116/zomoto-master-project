import passport from "passport";
import googleOAuth from "passport-google-oauth20";
import { Usermodel } from "../database/allModel";

const GoogleStratergy = googleOAuth.Strategy;

export default (passport) => {
    passport.use(
        new GoogleStratergy({
            clientID:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
            callbackURL:"http://localhost:4001/auth/google/callback"
        },
        async(accessToken,refreshToken,profile,done)=>{
            const newUser = {
                fullname:profile.displayName,
                email: profile.emails[0].value,
                profilePic: profile.photos[0].value
            };
            try{
                  //check whether user exists or not
                  const user = await Usermodel.findOne({email: newUser.email});
                  const token = user.generateJwtToken();
                  if(user){
                      done(null,{user,token});
                  }else {
                      const user = await Usermodel.create(newUser)
                  }


            }catch(error){
                done(error,null);
            }
        }
        )

    )
}