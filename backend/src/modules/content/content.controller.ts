import type { Context } from "hono";
import {
  successResponse,
  errorResponse,
} from "../../utlis/response";
import {
  serviceCreateContent,
  serviceGetMyContent,
  serviceUpdateContent,
  serviceDeleteContent,
} from "./content.service";


export const handleCreateContent = async (c: Context) => {
  try {
    const body = await c.req.json();
    const user = c.get("user"); 

    const content = await serviceCreateContent(body, user);

    return c.json(
      successResponse("Content posted successfully", content),
      201
    );
  } catch (error: any) {
    return c.json(
      errorResponse(error.message || "Error creating content"),
      400
    );
  }
};


export const handleGetMyContent = async (c: Context) => {
  try {
    const user = c.get("user");

    const content = await serviceGetMyContent(user);

    return c.json(
      successResponse("My content fetched", content),
      200
    );
  } catch (error: any) {
    return c.json(
      errorResponse(error.message || "Error fetching content"),
      400
    );
  }
};


export const handleUpdateContent = async (c: Context) => {
  try {
    const id = c.req.param("contentId");
    const body = await c.req.json();
    const user = c.get("user");

    const updated = await serviceUpdateContent(id, body, user);

    return c.json(
      successResponse("Content updated", updated),
      200
    );
  } catch (error: any) {
    return c.json(
      errorResponse(error.message || "Update failed"),
      400
    );
  }
};


export const handleDeleteContent = async (c: Context) => {
  try {
    const id = await c.req.param("contentId");
    const user = c.get("user");

    await serviceDeleteContent(id, user);

    return c.json(
      successResponse("Content deleted"),
      200
    );
  } catch (error: any) {
    return c.json(
      errorResponse(error.message || "Delete failed"),
      400
    );
  }
};
