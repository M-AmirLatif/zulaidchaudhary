import { PrismaClient, Role, Currency } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding Zulaid Chaudhary Foundation database...");

  const founderPassword = process.env.FOUNDER_INITIAL_PASSWORD || "FounderZCF2026!";
  const passwordHash = await bcrypt.hash(founderPassword, 12);

  // 1. Seed Founder Super Admin
  const founder = await prisma.user.upsert({
    where: { email: "founder@zulaidchaudharyfoundation.com" },
    update: {
      role: Role.SUPER_ADMIN,
      isActive: true,
    },
    create: {
      name: "Zulaid Chaudhary",
      email: "founder@zulaidchaudharyfoundation.com",
      passwordHash,
      role: Role.SUPER_ADMIN,
      isActive: true,
      preferredLanguage: "en",
      preferredCurrency: Currency.PKR,
    },
  });

  console.log(`✓ Super Admin seeded: ${founder.name} (${founder.email})`);

  // 2. Seed Medical Coordinator Admin
  const medCoord = await prisma.user.upsert({
    where: { email: "medical@zulaidchaudharyfoundation.com" },
    update: {
      role: Role.MEDICAL_COORDINATOR,
      isActive: true,
    },
    create: {
      name: "Dr. Medical Coordinator",
      email: "medical@zulaidchaudharyfoundation.com",
      passwordHash,
      role: Role.MEDICAL_COORDINATOR,
      isActive: true,
      preferredLanguage: "en",
      preferredCurrency: Currency.PKR,
    },
  });

  console.log(`✓ Medical Coordinator seeded: ${medCoord.name} (${medCoord.email})`);

  console.log("\nDatabase seeding completed successfully!");
  console.log("--------------------------------------------------");
  console.log("Login Email: founder@zulaidchaudharyfoundation.com");
  console.log(`Password:    ${founderPassword}`);
  console.log("--------------------------------------------------");
}

main()
  .catch((e) => {
    console.error("Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
