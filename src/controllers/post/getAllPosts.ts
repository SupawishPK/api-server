import { NextFunction, Request, Response } from "express";
import getAllPosts from "../../services/post/getAllPosts";

const getAllPostsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user_id } = req.query;
    const posts = await getAllPosts({
      userId: user_id ? Number(user_id) : undefined,
    });
    res.json(posts);
  } catch (error) {
    next(error);
  }
};

export default getAllPostsController;
