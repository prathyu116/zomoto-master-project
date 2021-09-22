import express from "express";
const zomoto = express()

zomoto.get("/",(req,res)=>{
     
    res.json({messgae:"setup succusfully!!!!"})

})

zomoto.listen(4000,()=>console.log("server is running"))