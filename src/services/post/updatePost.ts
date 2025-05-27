import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

const updatePost = async (
  id: number,
  data: { title?: string; body?: string }
) => {
  return await prisma.post.update({
    where: { id },
    data,
    include: {
      author: true,
    },
  });
};

export default updatePost;
