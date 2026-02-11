import { PrismaClient, User } from "@prisma/client";
import path from "path";
import { fileURLToPath } from "url";
import { parseJsonFile } from "../utils/json_parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async function upsertUser(prisma: PrismaClient) {
  const filePath = path.join(__dirname, "data.json");
  const userData: User[] = parseJsonFile<User>(filePath);
  await prisma.user.deleteMany();

  for (const user of userData) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: user,
    });
  }
}
