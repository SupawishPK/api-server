import { PrismaClient, User } from "../../generated/prisma";
const prisma = new PrismaClient();

type PatchUserInput = Partial<Omit<User, "id">>;

const patchUser = async (id: number, data: PatchUserInput): Promise<User> => {
  return prisma.user.update({ where: { id }, data });
};

export default patchUser;
