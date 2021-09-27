import express from "express";
import cors from "cors";
import helmet from "helmet";
const zomoto = express();

zomoto.use(express.json);
zomoto.use(express.urlencoded({extended:false}));
zomoto.use(helmet());
zomoto.use(cors());

zomoto.get("/",(req,res)=>{ 
    res.json({messgae:"setup succusfully!!!!"});
})

zomoto.listen(4000,()=>console.log("server is running"))