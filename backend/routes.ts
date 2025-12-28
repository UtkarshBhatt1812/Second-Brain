import { Hono } from "hono";
import contentRoute from "../backend/src/modules/content/content.route";
import authRoutes from "../backend/src/modules/content/content.route";


const routes  = new Hono()

routes.route('/auth',authRoutes)
routes.route('/content',contentRoute)
export default routes