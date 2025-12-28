import { Hono } from "hono";

import authRoutes from "./modules/auth/auth.routes";


const routes  = new Hono()

routes.route('/auth',authRoutes)
export default routes