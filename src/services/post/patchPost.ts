import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

const patchPost = async (id: number, data: any) => {
  return await prisma.post.update({
    where: { id },
    data,
    include: {
      author: true,
    },
  });
};

export default patchPost;
