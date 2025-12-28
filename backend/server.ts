import app from "./app";
import {env} from "../backend/src/config/env";
import { connectDB } from '../backend/src/config/db';

await connectDB();

export default {
  port: env.PORT,
  fetch: app.fetch,
};
