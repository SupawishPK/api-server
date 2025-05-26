import { PrismaClient, User } from "../../generated/prisma";
const prisma = new PrismaClient();

const getUserById = async (id: number): Promise<User | null> => {
  return prisma.user.findUnique({ where: { id }, include: { posts: true } });
};

export default getUserById;
