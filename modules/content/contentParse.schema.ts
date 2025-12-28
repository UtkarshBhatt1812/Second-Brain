
import z from "zod";


export const validateContent =z.object({
  title: z.string().min(3),
  body: z.string().min(10),
  tags: z.array(z.string()).optional(),
});

export type CreateContentInput = z.infer<typeof validateContent>;
