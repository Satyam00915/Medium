import z from "zod";

export const signUpSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

export type SignUpInput = z.infer<typeof signUpSchema>;

export const signinSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type SigninInput = z.infer<typeof signinSchema>;

export const blogSchema = z.object({
  title: z.string(),
  content: z.string(),
  published: z.boolean().optional().default(false),
  authorId: z.string(),
});

export type Bloginput = z.infer<typeof blogSchema>;
