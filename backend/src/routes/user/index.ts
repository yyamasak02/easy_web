import { Hono } from "hono";
import { findUserAll } from "../../services/user";
import { PrismaClient } from "@prisma/client/extension";
import { ContextWithPrisma } from "../../types/prisma";
import withPrisma from "../../lib/prisma.js";

const user = new Hono<ContextWithPrisma>();

user.get("/", withPrisma, async (c) => {
  const prisma: PrismaClient = c.get("prisma");
  const users = await findUserAll(prisma);
  return c.json(users);
});

export default user;
