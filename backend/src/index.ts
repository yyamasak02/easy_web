import { Hono } from "hono";
import { cors } from "hono/cors";
import menuRoute from "./routes/menu/index.js";
import commonRoute from "./routes/index.js";
import "dotenv/config";

const app = new Hono();
app.use(
  "*",
  cors({
    origin: process.env.FRONTEND_URL,
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
  }),
);
app.route("/api", commonRoute);
app.route("/api/menu", menuRoute);
export default app;
