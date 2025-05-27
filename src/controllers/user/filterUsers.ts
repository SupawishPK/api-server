import { NextFunction, Request, Response } from "express";
import filterUsers from "../../services/user/filterUsers";

const filterUsersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const filters = req.query;
    const users = await filterUsers(filters);
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export default filterUsersController;
