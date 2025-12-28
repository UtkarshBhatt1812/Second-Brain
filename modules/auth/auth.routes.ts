import { Hono } from "hono";
import { handleLogin, handleRegister } from "./auth.controller";
import { authMiddleware } from "../../middlewares/auth/auth.middleware";


const authRoutes = new Hono();

authRoutes.post('/register',handleRegister)
authRoutes.post('/login',handleLogin)
authRoutes.post('/logout',authMiddleware,)
authRoutes.get('/me',authMiddleware)

export default authRoutes