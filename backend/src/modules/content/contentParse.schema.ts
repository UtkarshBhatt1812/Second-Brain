
import z from "zod";
import { ContentType } from "../../collections/content/content.scehma";
export const validateContent = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  body: z.string().min(10, "Body must be at least 10 characters"),
  type: z.enum(ContentType),
  isPublic: z.boolean(),
  archived: z.boolean(),
  tags: z.array(z.string()).optional(),
});

export type CreateContentInput = z.infer<typeof validateContent>;
