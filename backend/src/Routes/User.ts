import { Hono } from "hono";

const User = new Hono();

User.post("/signup", (c) => {
  return c.json({
    message: "Sign Up",
  });
});

User.post("/signin", (c) => {
  return c.json({
    message: "Signin",
  });
});

export default User;
