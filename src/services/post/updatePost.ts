import { Post, PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

type IUpdatePostInput = Partial<
  Omit<Post, "id" | "authorId" | "createdAt" | "updatedAt">
>;

const updatePost = async (id: number, data: IUpdatePostInput) => {
  return await prisma.post.update({
    where: { id },
    data,
    include: {
      author: true,
    },
  });
};

export default updatePost;
