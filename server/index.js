//env variable
require("dotenv").config();

import express from "express";
import cors from "cors";
import helmet from "helmet";

//api
import Auth from './API/Auth';
//Database Connection
import ConnectDB from './database/connection';

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({extended: false}));
zomato.use(helmet());
zomato.use(cors());

//For Application Routes localhost:4000/auth/signup
zomato.use("/auth",Auth)


zomato.get("/", (req,res) => res.json({message: "SetUp Success Yay!!"}));


zomato.listen(4001,()=>
ConnectDB().then(()=>console.log("server is running")).catch(()=>console.log("faild")));

