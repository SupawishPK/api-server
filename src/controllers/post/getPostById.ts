import { RequestHandler } from "express";
import getPostById from "../../services/post/getPostById";

const getPostByIdController: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await getPostById(Number(id));
    if (!post) {
      res.status(404).json({ error: "Post not found" });
      return;
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Error fetching post" });
  }
};

export default getPostByIdController;
