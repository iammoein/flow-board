import * as z from "zod";

export const issuesSchema = z.object({
  title: z.string().min(1, "Title is reqiured"),
  description: z.string().min(10, "Description is reqiured"),
});
