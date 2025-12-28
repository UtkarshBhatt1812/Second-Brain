import { Hono } from "hono";
import contentRoute from "./modules/content/content.route";
import authRoutes from "./modules/auth/auth.routes";


const routes  = new Hono()

routes.route('/auth',authRoutes)
routes.route('/content',contentRoute)
export default routes