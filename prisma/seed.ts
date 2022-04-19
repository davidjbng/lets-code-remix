import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  // cleanup the existing database
  await prisma.note.deleteMany().catch(() => {
    // no worries if it doesn't exist yet
  });

  await prisma.note.create({
    data: {
      title: "My first note",
      body: "Hello, world!",
    },
  });

  await prisma.note.create({
    data: {
      title: "My second note",
      body: "Hello, world!",
    },
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
