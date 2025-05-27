import { NextFunction, Request, Response } from "express";
import patchUser from "../../services/user/patchUser";

const patchUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const user = await patchUser(Number(id), req.body);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export default patchUserController;
