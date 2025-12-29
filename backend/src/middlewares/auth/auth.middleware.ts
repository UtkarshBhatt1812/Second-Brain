import type { Context, Next } from "hono";
import { getCookie } from "hono/cookie";
import { verify } from "hono/jwt";
import { env } from "../../config/env";
import { errorResponse } from "../../utlis/response";

export const authMiddleware = async (c: Context, next: Next) => {
  try {
    const token = getCookie(c, "token");

    if (!token) {
      return c.json(errorResponse("Unauthorized"), 401);
    }

    const payload = await verify(token, env.JWT_SECRET);

    c.set("user", payload); // store full payload

    await next();
  } catch {
    return c.json(errorResponse("Invalid or expired token"), 401);
  }
};
