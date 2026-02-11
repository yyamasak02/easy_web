import { PrismaClient } from "@prisma/client/extension";

export type ContextWithPrisma = {
  Variables: {
    prisma: PrismaClient;
  };
};
