import { PrismaClient, User } from "../../generated/prisma";

const prisma = new PrismaClient();

type CreateUserInput = Omit<User, "id" | "createdAt" | "updatedAt">;

const createUser = async (data: CreateUserInput): Promise<User> => {
  return prisma.user.create({ data });
};

export default createUser;
