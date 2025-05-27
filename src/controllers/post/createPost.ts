import { NextFunction, Request, Response } from "express";
import createPost from "../../services/post/createPost";

const createPostController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, body, authorId } = req.body;
    const post = await createPost({
      title,
      body,
      authorId: Number(authorId),
    });
    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};

export default createPostController;
