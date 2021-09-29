import mongoose from "mongoose";

export default async () => {
  return mongoose.connect(process.env.MONGO_URL,{

    // useNewUrlParser:true,
    // useUnifiedTopology:true,
    // useCreateIndex:true,
    // useFindAndModify:false

  });
};
// mongoose.connect(process.env.MONGO_URL).then(()=>console.log("connection established"))
