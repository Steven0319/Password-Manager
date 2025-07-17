import { z } from "zod";

export const formSchema = z.object({
  typeElement: z.string().min(2).max(50),
  isFavourite: z.boolean(),
  name: z.string().min(2).max(50),
  directory: z.string().min(2).max(50),
  username: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
  urlWebsite: z.string().min(2).max(50).optional(),
  notes: z.string().optional(),
  userId: z.string(),
});


export type FormData = z.infer<typeof formSchema>;
