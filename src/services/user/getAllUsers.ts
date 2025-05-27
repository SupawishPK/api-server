import { Prisma, PrismaClient, User } from "../../generated/prisma";

const prisma = new PrismaClient();

type IGetAllUsersInput = {
  name?: string;
  email?: string;
  username?: string;
  phone?: string;
  website?: string;
};

const getAllUsers = async ({
  name,
  email,
  username,
  phone,
  website,
}: IGetAllUsersInput): Promise<User[]> => {
  const where: Prisma.UserWhereInput = {};

  if (name) {
    where.name = { contains: name };
  }
  if (email) {
    where.email = { contains: email };
  }
  if (username) {
    where.username = { contains: username };
  }
  if (phone) {
    where.phone = { contains: phone };
  }
  if (website) {
    where.website = { contains: website };
  }

  return prisma.user.findMany({ where, include: { posts: true } });
};

export default getAllUsers;
