import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { jwt, sign } from "hono/jwt";
import { hashPassword, verifyPassword } from "../Hash/hash";
import { signinSchema, signUpSchema } from "../zod/zod";

const User = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

User.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = signUpSchema.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({ message: "Invalid request" });
  }

  const findUser = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (findUser) {
    return c.json({ message: "Email already exists" });
  }

  const hashpswd = await hashPassword(body.password);

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: hashpswd,
    },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });

  const token = await sign({ userId: user.id }, c.env.JWT_SECRET);

  return c.json({
    user,
    token: token,
    message: "User Created",
  });
});

User.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  });

  const body = await c.req.json();

  const { success } = signinSchema.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({ message: "Invalid Inputs" });
  }

  const response = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (!response) {
    return c.json({ message: "User not found" });
  }

  const checkPswd = verifyPassword(body.password, response.password);

  if (!checkPswd) {
    return c.json({ message: "Invalid password" });
  }

  const token = sign({ userId: response.id }, c.env.JWT_SECRET);

  return c.json({
    User: response,
    message: "User Signed In",
  });
});

export default User;
