import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
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

  try {
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
  } catch (error) {
    c.status(500);
    return c.json({ message: "Internal Server Error" });
  }
});

User.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  });

  const body = await c.req.json();

  try {
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

    const token = await sign({ userId: response.id }, c.env.JWT_SECRET);
    return c.json({
      token,
      User: response,
      message: "User Signed In",
    });
  } catch (e) {
    c.status(500);
    console.log(e);
    return c.json({ message: "Internal Server Error" });
  }
});

export default User;
