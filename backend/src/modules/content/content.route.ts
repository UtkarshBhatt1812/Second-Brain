import { Hono } from "hono";
import { authMiddleware } from "../../middlewares/auth/auth.middleware";
import {
  handleCreateContent,
  handleGetMyContent,
  handleUpdateContent,
  handleDeleteContent,
} from "./content.controller";

const contentRoute = new Hono();


contentRoute.use("/*", authMiddleware);


contentRoute.post("/", handleCreateContent);


contentRoute.get("/my", handleGetMyContent);


contentRoute.put("/:contentId", handleUpdateContent);


contentRoute.delete("/:contentId", handleDeleteContent);

export default contentRoute;
