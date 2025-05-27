import { NextFunction, Request, Response } from "express";
import updatePost from "../../services/post/updatePost";

const updatePostController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { title, body } = req.body;
    const post = await updatePost(Number(id), { title, body });
    res.json(post);
  } catch (error) {
    next(error);
  }
};

export default updatePostController;
