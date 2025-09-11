import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();
app.use(
  "*",
  cors({
    origin: "http://localhost:3000",
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
  }),
);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/hello", (c) => {
  return c.text("Hello Hono!");
});

app.get("/api/menu", (c) => {
  const menuItems = [
    { label: "ホーム", href: "/" },
    { label: "体験レッスン", href: "/test" },
    { label: "カレンダー", href: "/calender" },
    { label: "お問い合わせ", href: "/contact" },
    { label: "アクセス", href: "/access" },
    { label: "料金表", href: "/fee" },
  ];
  return c.json(menuItems);
});

export default app;
