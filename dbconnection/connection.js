import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

let client
export const connectDb = async()=>{
    try{
        client = new MongoClient(process.env.MONGO_URL);
        await client.connect();
        console.log("Database Connected");
    }catch(error){
        console.log("Error in connection", error)
        process.exit(1);
    }
}

process.on("SIGINT",async ()=>{
    if(client){
        await client.close();
        console.log("database closed, bye");
    }
    process.exit(0);
});