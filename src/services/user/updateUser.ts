import { PrismaClient, User } from "../../generated/prisma";
const prisma = new PrismaClient();

type IUpdateUserInput = Partial<Omit<User, "id" | "createdAt" | "updatedAt">>;

const updateUser = async (id: number, data: IUpdateUserInput): Promise<User> => {
  return prisma.user.update({ where: { id }, data });
};

export default updateUser;
