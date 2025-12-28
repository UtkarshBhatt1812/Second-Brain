import {loginSchema, registerSchema} from "./auth.schema"
import { UserModel, type User } from "../../collections/users/user.schema"
import bcrypt from "bcryptjs";
import { sign } from "hono/jwt";
import { env } from "../../config/env";
import type { Types } from "mongoose";


export const serviceRegister=async (input : any)=>{
   
    const data = registerSchema.parse(input)
    const {name,email,password} = data

    const existingUser  = await UserModel.findOne({email})
    if(existingUser){
        throw new Error("User Exists")
    }

    const hashedPassword = await bcrypt.hash(password,10)
    const user = await UserModel.create({name,email ,password : hashedPassword})
    return user ;

}

export const serviceLogin = async (input : any )=>{
    const data = loginSchema.parse(input);
    const {email, password} = data

    const user =await UserModel.findOne({email}).select('+password')
    if(!user)
    {
        throw new Error("User not exists")
    }
    const isValid =await bcrypt.compare(password,user.password)
    if(!isValid){
        throw new Error("Wrong Password !!!")
    }
    const token = await sign({
        id : user._id.toString(),
        email : email,
       },env.JWT_SECRET
    )

    return {
    token,
    user: {
      id: user._id.toString(),
      email: user.email,
    },
  }


}
export const serviceDetails=async (user : {
    id : Types.ObjectId,
    email : string
})=>{
    const userDetails = await UserModel.find({owner : user.id})
    return userDetails
}