import { NextFunction, Request, Response } from "express";
import getAllUsers from "../../services/user/getAllUsers";

const getAllUsersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const name = typeof req.query.name === 'string' ? req.query.name : undefined;
    const email = typeof req.query.email === 'string' ? req.query.email : undefined;
    const username = typeof req.query.username === 'string' ? req.query.username : undefined;
    const phone = typeof req.query.phone === 'string' ? req.query.phone : undefined;
    const website = typeof req.query.website === 'string' ? req.query.website : undefined;
    const users = await getAllUsers({ name, email, username, phone, website });
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export default getAllUsersController;
