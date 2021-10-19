//Libraries
//require('dotenv').config();
import express from "express";
import multer from "multer";

//Database model
import {ImageModel} from "../../database/allModel";
//validation
import {validateImg} from "./../../Validation/image"
//Utilities
import {s3Upload} from "../../Utilis/AWS/s3";

const Router = express.Router();
// Multer config
const storage = multer.memoryStorage();//upload to ram
const upload = multer({storage});//ram to server





/*
Route            /
Des              Uploading given image to S3 bucket , and then saving the file to mongodb
Params           None
Access           Public
Method           POST
*/

Router.post("/", upload.single("file") ,async(req,res)=> {
  try {
    await validateImg(req.file)
 const file = req.file;

 //S3 bucket options
 const bucketOptions = {
   Bucket: "zomatointernship",
   Key: file.originalname,
   Body: file.buffer,
   ContentType: file.mimetype,
   ACL: "public-read"
 };


 const uploadImage = await s3Upload(bucketOptions);

 return res.status(200).json({ uploadImage });

  } catch (error) {
   return res.status(500).json({error: error.message});
  }
});

export default Router;