import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

const getAllPosts = async ({ userId }: { userId?: number }) => {
  return await prisma.post.findMany({
    where: {
      authorId: userId,
    },
    include: {
      author: true,
    },
  });
};

export default getAllPosts;
