import { Hono } from "hono";
import { getMyDetails, handleLogin, handleRegister,handleLogout } from "./auth.controller";
import { authMiddleware } from "../../middlewares/auth/auth.middleware";


const authRoutes = new Hono();

authRoutes.post('/register',handleRegister)
authRoutes.post('/login',handleLogin)
authRoutes.post('/logout',handleLogout)
authRoutes.get('/me',authMiddleware,getMyDetails)

export default authRoutes