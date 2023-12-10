import app from "./fastify.js";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();
async function main() {
  try {
    await app.listen({ port: 3000 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

main()
  .then(async () => {
    await prisma.$connect();
    console.log("Connection to prisma db successful");
  })
  .catch(async (e) => {
    await prisma.$disconnect();
    process.exit(1);
  });
