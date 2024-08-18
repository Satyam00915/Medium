import { Hono } from "hono";

const Blog = new Hono();

Blog.post("/", (c) => {
  return c.json({
    message: "Create a Blog",
  });
});

Blog.put("/", (c) => {
  return c.json({
    message: "Update Blog",
  });
});

Blog.post("/:id", (c) => {
  return c.json({
    message: "fetch by id",
  });
});

Blog.get("/bulk", (c) => {
  return c.json({
    message: "Fetch in a bulk",
  });
});

export default Blog;
