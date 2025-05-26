import { PrismaClient, User } from "../../generated/prisma";
const prisma = new PrismaClient();

const getAllUsers = async (): Promise<User[]> => {
  return prisma.user.findMany({ include: { posts: true } });
};

export default getAllUsers;
