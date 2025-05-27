import { PrismaClient, User } from "../../generated/prisma";
const prisma = new PrismaClient();

type IPatchUserInput = Partial<Omit<User, "id" | "createdAt" | "updatedAt">>;

const patchUser = async (id: number, data: IPatchUserInput): Promise<User> => {
  return prisma.user.update({ where: { id }, data });
};

export default patchUser;
