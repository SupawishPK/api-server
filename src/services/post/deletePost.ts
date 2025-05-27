import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

const deletePost = async (id: number) => {
  return await prisma.post.delete({
    where: { id },
  });
};

export default deletePost;
