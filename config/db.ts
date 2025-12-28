import mongoose from "mongoose"
import { env } from "./env"


let isConnected = false ; 


export const connectDB =async ()=>{
    if(isConnected)
    {
        return ; 
    }
    try {
        let succcess = await mongoose.connect(env.MONGO_URL)
        if(succcess)
           {
            isConnected = true ; 
            console.log("DB Connected Succesfully")
           }
    } catch (error) {
        console.log("Error connecting Db")
        process.exit(1);
    }
}