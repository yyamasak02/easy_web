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
    { label: "ホーム2", href: "/" },
    { label: "ログイン", href: "/login" },
    { label: "体験レッスン", href: "/test" },
    { label: "カレンダー", href: "/calender" },
    { label: "お問い合わせ", href: "/contact" },
    { label: "アクセス", href: "/access" },
    { label: "料金表", href: "/fee" },
  ];
  return c.json(menuItems);
});

app.post("/api/login", async (c) => {
  const form = await c.req.formData();
  const username = form.get("username");
  const password = form.get("password");

  // Here you would normally validate the username and password
  if (username === "admin" && password === "password") {
    return c.json({ message: "Login successful" });
  } else {
    return c.json({ message: "Invalid credentials" }, 401);
  }
});

export default app;
