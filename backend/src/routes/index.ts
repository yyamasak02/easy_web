import { Hono } from "hono";

const common = new Hono();

common.post("/login", async (c) => {
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

export default common;
