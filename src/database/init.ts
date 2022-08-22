import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const item = await prisma.inventory.create({
    data: {
      name: 'Aged Brie',
      sell_in: 2,
      quality: 0
    }
  });
  console.log(item);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
