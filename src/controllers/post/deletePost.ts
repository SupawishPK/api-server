import { NextFunction, Request, Response } from "express";
import deletePost from "../../services/post/deletePost";

const deletePostController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    await deletePost(Number(id));
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export default deletePostController;
