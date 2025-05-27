import { RequestHandler } from "express";
import getUserById from "../../services/user/getUserById";

const getUserByIdController: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await getUserById(Number(id));
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export default getUserByIdController;
