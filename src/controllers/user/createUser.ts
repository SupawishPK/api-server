import { NextFunction, Request, Response } from "express";
import createUser from "../../services/user/createUser";

const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, name, username, phone, website } = req.body;
    const user = await createUser({
      email,
      name,
      username,
      phone,
      website,
    });
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

export default createUserController;
