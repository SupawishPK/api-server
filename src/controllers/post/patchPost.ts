import { NextFunction, Request, Response } from "express";
import patchPost from "../../services/post/patchPost";

const patchPostController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const post = await patchPost(Number(id), req.body);
    res.json(post);
  } catch (error) {
    next(error);
  }
};

export default patchPostController;
