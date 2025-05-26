import { PrismaClient, User } from "../../generated/prisma";
const prisma = new PrismaClient();

type UpdateUserInput = Partial<Omit<User, "id">>;

const updateUser = async (id: number, data: UpdateUserInput): Promise<User> => {
  return prisma.user.update({ where: { id }, data });
};

export default updateUser;
