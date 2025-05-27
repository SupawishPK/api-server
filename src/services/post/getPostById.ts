import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

const getPostById = async (id: number) => {
  return await prisma.post.findUnique({
    where: { id },
    include: {
      author: true,
    },
  });
};

export default getPostById;
