const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const mockData = require("../data/mockData");

async function main() {
  try {
    for (const resource of mockData) {
      // Check if a resource with the same title already exists in the database
      const existingResource = await prisma.resource.findFirst({
        where: {
          title: resource.title,
        },
      });

      // If the resource does not exist, insert it into the database
      if (!existingResource) {
        await prisma.resource.create({
          data: {
            title: resource.title,
            description: resource.description,
            grades: resource.grades.join(","), // Convert array to string
          },
        });
      }
    }
    console.log("Data inserted successfully");
  } catch (error) {
    console.error("Error inserting data:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
