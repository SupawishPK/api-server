import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

const filterUsers = async (filters: Record<string, any>) => {
  const where: Record<string, any> = {};

  if (filters.name) {
    where.name = { contains: filters.name, mode: "insensitive" };
  }
  if (filters.email) {
    where.email = { contains: filters.email, mode: "insensitive" };
  }
  if (filters.username) {
    where.username = { contains: filters.username, mode: "insensitive" };
  }
  if (filters.phone) {
    where.phone = { contains: filters.phone };
  }
  if (filters.website) {
    where.website = { contains: filters.website, mode: "insensitive" };
  }

  return prisma.user.findMany({
    where,
  });
};

export default filterUsers;
