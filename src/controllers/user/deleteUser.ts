import { NextFunction, Request, Response } from "express";
import deleteUser from "../../services/user/deleteUser";

const deleteUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    await deleteUser(Number(id));
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export default deleteUserController;
