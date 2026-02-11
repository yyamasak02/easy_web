import { PrismaClient, User } from "../../generated/client";

export const findUserAll = async (prisma: PrismaClient): Promise<User[]> => {
  return await prisma.user.findMany();
};

export const findUserByEmail = async (
  prisma: PrismaClient,
  email: string,
): Promise<User | null> => {
  return await prisma.user.findUnique({
    where: { email: email },
  });
};
