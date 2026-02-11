import { Hono } from "hono";
import { cors } from "hono/cors";
import menuRoute from "./routes/menu.route.js";
import commonRoute from "./routes/index.route.js";
import userRoute from "./routes/user.route.js";
import "dotenv/config";
import type { ContextWithPrisma } from "./types/prisma.type.js";

const app = new Hono<ContextWithPrisma>();

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
app.route("/api/user", userRoute);
export default app;
