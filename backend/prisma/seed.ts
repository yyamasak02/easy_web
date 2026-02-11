import "dotenv/config";
import { PrismaClient, User } from "../src/generated/client";
import { PrismaPg } from "@prisma/adapter-pg";
import upsertUser from "./seeders/user";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});
const prisma = new PrismaClient({ adapter });

async function main() {
  await upsertUser(prisma);
  console.log("Seed data inserted successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
