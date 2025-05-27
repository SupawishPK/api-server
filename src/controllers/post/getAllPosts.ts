import { NextFunction, Request, Response } from "express";
import getAllPosts from "../../services/post/getAllPosts";

const getAllPostsController = async (
  _: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const posts = await getAllPosts();
    res.json(posts);
  } catch (error) {
    next(error);
  }
};

export default getAllPostsController;
