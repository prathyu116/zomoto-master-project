// import googleOAuth from "passport-google-oauth20";
// import passport from "passport";

// import { Usermodel } from "../database/allModel";

// const GoogleStratergy = googleOAuth.Strategy;

// export default (passport) => {
//     passport.use(
//         new GoogleStratergy({
//             clientID:process.env.GOOGLE_CLIENT_ID,
//             clientSecret:process.env.GOOGLE_CLIENT_SECRET,
//             callbackURL:"http://localhost:4001/auth/google/callback"
//         },
//         async(accessToken,refreshToken,profile,done)=>{
//             //creating new user
//             const newUser = {
//                 fullname:profile.displayName,
//                 email: profile.emails[0].value,
//                 profilePic: profile.photos[0].value
//             };
//             try{
//                   //check whether user exists or not
//                   const user = await Usermodel.findOne({email: newUser.email});
                
//                   if(user){
//                         //generate jwt token
//                   const token = user.generateJwtToken();
//                     //   return user
//                       done(null,{user,token});
//                   }else {
//                       //creating new user
//                       const user = await Usermodel.create(newUser)
//                       //return user
//                       done(null,{user,token});
//                   }


//             }catch(error){
//                 done(error,null);
//             }
//         }
//         )

//     );
//     passport.serializeUser((userData,done) => done(null, {...userData})); //these are callback
//     passport.deserializeUser((id, done) => done(null, id));
    
// }