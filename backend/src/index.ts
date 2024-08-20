import { Hono } from "hono";
import User from "./Routes/User";
import Blog from "./Routes/Blog";
import { cors } from "hono/cors";

const app = new Hono().basePath("/api/v1");

app.use(cors());
app.route("/user", User);
app.route("/blog", Blog);

export default app;
