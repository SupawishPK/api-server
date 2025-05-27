import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

const createPost = async (data: {
  title: string;
  body: string;
  authorId: number;
}) => {
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
