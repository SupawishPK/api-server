import { NextFunction, Request, Response } from "express";
import getPostById from "../../services/post/getPostById";

const getPostByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const post = await getPostById(Number(id));
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Error fetching post" });
  }
};

export default getPostByIdController;
