import { Hono } from "hono";
import { executeLogin, LoginResult } from "../services/auth.service";
import withPrisma from "../lib/prisma";
import { PrismaClient } from "@prisma/client/extension";
import { ContextWithPrisma } from "../types/prisma.type";
import { validator } from "hono/validator";
import { LoginSchema } from "../schemas/login.schema";
import type { LoginSchema as LoginSchemaType } from "../schemas/login.schema";

const common = new Hono<ContextWithPrisma>();

common.post(
  "/login",
  withPrisma,
  validator("form", (value, c) => {
    const result = LoginSchema.safeParse({
      email: value.email,
      password: value.password,
    });
    if (!result.success) {
      return c.json({ success: false, message: "Invalid input" }, 400);
    }
    return result.data;
  }),
  async (c) => {
    const form: LoginSchemaType = await c.req.valid("form");
    const prisma: PrismaClient = c.get("prisma");
    const result: LoginResult = await executeLogin(prisma, form);
    if (!result.success) {
      return c.json(result, 400);
    }
    return c.json(result);
  },
);

export default common;
