import express from "express";
import { connectDb } from "./dbconnection/connection.js";

const app = express();
const port= 8080;

app.use(express.json());


connectDb().then(()=>{
    try{
        app.listen(port,()=>{
            console.log(`Server is listening at port ${port}`)
        })
    }catch(err){
        console.log("Something went wrong",err);
    }
})