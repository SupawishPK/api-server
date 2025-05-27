import { NextFunction, Request, Response } from "express";
import getAllUsers from "../../services/user/getAllUsers";

const getAllUsersController = async (
  _: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export default getAllUsersController;
