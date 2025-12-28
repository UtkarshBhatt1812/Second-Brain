import app from "./app";
import {env} from "./config/env";
import { connectDB } from './config/db';

await connectDB();

export default {
  port: env.PORT,
  fetch: app.fetch,
};
