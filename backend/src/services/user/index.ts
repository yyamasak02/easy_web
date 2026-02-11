import { PrismaClient } from "../../generated/client";

export const findUserAll = async (prisma: PrismaClient) => {
  const users = await prisma.user.findMany();
  return users;
};
