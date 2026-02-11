import { Hono } from "hono";
import { executeLogin } from "../services/auth";
import withPrisma from "../lib/prisma";
import { PrismaClient } from "@prisma/client/extension";
import { ContextWithPrisma } from "../types/prisma";

const common = new Hono<ContextWithPrisma>();

common.post("/login", withPrisma, async (c) => {
  const form = await c.req.formData();
  const email = form.get("email");
  const password = form.get("password");
  if (typeof email !== "string" || typeof password !== "string") {
    return c.json({ success: false, message: "Invalid input" }, 400);
  }
  const prisma: PrismaClient = c.get("prisma");
  const result = await executeLogin(prisma, email, password);
  return c.json(result);
});

export default common;
