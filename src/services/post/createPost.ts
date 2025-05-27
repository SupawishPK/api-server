import { Post, PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

type ICreatePostInput = Omit<Post, "id" | "createdAt" | "updatedAt">;

const createPost = async (data: ICreatePostInput) => {
  return await prisma.post.create({
    data: {
      title: data.title,
      body: data.body,
      authorId: data.authorId,
    },
    include: {
      author: true,
    },
  });
};

export default createPost;
