import type { Context } from "hono" 
import { serviceDetails, serviceLogin, serviceRegister } from "./auth.service";
import { errorResponse, successResponse } from "../../utlis/response";
import { setCookie , deleteCookie } from "hono/cookie";
import { contentModel } from "../../collections/content/content.scehma";

 export const handleRegister =async (c : Context)=>{
   try {
    const body = await c.req.json();
    const user = await serviceRegister(body);

   return c.json(
    successResponse("User Created Successfully",user),
    201
   )
   } catch (error) {
     return c.json(
        errorResponse("Error Creating User"+error),
        400
     )
   }

}

export const handleLogin=async (c: Context)=>{
    try {
        const input =await c.req.json();
        const user = await serviceLogin(input);

        setCookie(c, "token", user.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    maxAge: 60 * 60 * 4, 
    path: "/",
  });
        return c.json(successResponse("Login Success !!!",user),201)

    } catch (error) {
        return c.json(errorResponse("Login Failed : "+error),401)
    }
}
export const handleLogout = (c: Context) => {
  deleteCookie(c, 'token', {
    httpOnly: true,
    secure: false,      // false in local dev if no HTTPS
    sameSite: 'Strict',
    path: '/',
  })
  c.set('user',null)
  return c.json({
    success: true,
    message: 'Logged out successfully',
  })
}
export const getMyDetails = async (c : Context)=>{
    const user = c.get('user')
    const userDetails = await serviceDetails(user);
    console.log(userDetails)
    return c.json(successResponse('Fetch Succesfully',userDetails),201)
}