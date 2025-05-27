import { NextFunction, Request, Response } from "express";
import updateUser from "../../services/user/updateUser";

const updateUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { email, name, username, phone, website } = req.body;
    const user = await updateUser(Number(id), {
      email,
      name,
      username,
      phone,
      website,
    });
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export default updateUserController;
