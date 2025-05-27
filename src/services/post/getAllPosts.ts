import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

const getAllPosts = async () => {
  return await prisma.post.findMany({
    include: {
      author: true,
    },
  });
};

export default getAllPosts;
