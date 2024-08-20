import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { authChecker } from "../Middleware/middleware";
import { blogSchema } from "../zod/zod";

const Blog = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userinfo: string;
  };
}>();

Blog.use("/*", authChecker);

Blog.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  body.authorId = c.get("userinfo");

  console.log(body);

  try {
    const { success } = blogSchema.safeParse(body);

    if (!success) {
      return c.json({
        message: "Invalid Inputs",
      });
    }

    const blog = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: body.authorId,
      },
    });
    return c.json({
      blog,
      message: "Created a Blog",
    });
  } catch (error) {
    c.status(500);
    return c.json({
      message: `Error: ${error}`,
    });
  }
});

Blog.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  try {
    const blog = await prisma.post.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });

    return c.json({
      blog,
      message: "Updated the Blog Successfully",
    });
  } catch (error) {
    c.status(500);
    return c.json({
      message: `Error: ${error}`,
    });
  }
});

Blog.post("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const id = c.req.param("id");

  const blog = await prisma.post.findFirst({
    where: {
      id: id,
    },
  });

  if (!blog) {
    c.status(404);
    return c.json({
      message: "Blog not found",
    });
  }

  return c.json({
    blog,
  });
});

//Add Pagination
Blog.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const allBlogs = await prisma.post.findMany();
  return c.json({
    allBlogs,
  });
});

export default Blog;
