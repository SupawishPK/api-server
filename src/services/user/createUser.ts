import { PrismaClient, User } from "../../generated/prisma";

const prisma = new PrismaClient();

type ICreateUserInput = Omit<User, "id" | "createdAt" | "updatedAt">;

const createUser = async (data: ICreateUserInput): Promise<User> => {
  return prisma.user.create({ data });
};

export default createUser;
