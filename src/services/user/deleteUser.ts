import { PrismaClient, User } from "../../generated/prisma";

const prisma = new PrismaClient();

const deleteUser = async (id: number): Promise<User> => {
  return prisma.user.delete({ where: { id } });
};

export default deleteUser;
