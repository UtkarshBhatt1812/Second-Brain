import type { Context, Next } from "hono";
import { getCookie } from "hono/cookie";
import { verify } from "hono/jwt";
import { env } from "../../config/env";
import { errorResponse } from "../../../../utlis/response";

export const authMiddleware = async (c: Context, next: Next) => {
  try {
    
    const token = getCookie(c, "access_token");

    if (!token) {
      return c.json(
        errorResponse("Unauthorized: Token missing"),
        401
      );
    }

    
    const payload = await verify(token, env.JWT_SECRET);

    
    c.set("user", {
      id: payload.id,
      email: payload.email,
    });

    
    await next();
  } catch (error) {
    return c.json(
      errorResponse("Unauthorized: Invalid or expired token"),
      401
    );
  }
};
