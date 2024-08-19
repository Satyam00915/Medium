import { Context, Next } from "hono";
import { verify } from "hono/jwt";

export async function authChecker(c: Context, next: Next) {
  try {
    const token = c.req.header("authorization");
    if (!token) {
      return c.json({
        message: "Token Invalid",
      });
    }

    const decoded = await verify(token, c.env.JWT_SECRET);
    if (!decoded.userId) {
      return c.json({
        message: "Token Invalid",
      });
    }

    c.set("userinfo", decoded.userId);
  } catch (error) {
    c.status(401);
    return c.json({
      message: `Error: ${error}`,
    });
  }

  await next();
}
