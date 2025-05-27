import { Post, PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

type IPatchPostInput = Partial<
  Omit<Post, "id" | "authorId" | "createdAt" | "updatedAt">
>;

const patchPost = async (id: number, data: IPatchPostInput) => {
  return await prisma.post.update({
    where: { id },
    data,
    include: {
      author: true,
    },
  });
};

export default patchPost;
