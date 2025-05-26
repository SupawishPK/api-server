import { NextFunction, Request, Response } from "express";
import createUser from "../services/user/createUser";
import deleteUser from "../services/user/deleteUser";
import getAllUsers from "../services/user/getAllUsers";
import getUserById from "../services/user/getUserById";
import patchUser from "../services/user/patchUser";
import updateUser from "../services/user/updateUser";
import filterUsers from "../services/user/filterUsers";

export const getAllUsersController = async (
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

// Get user by ID
export const getUserByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const user = await getUserById(Number(id));
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
};

// Create user
export const createUserController = async (
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

// Update user
export const updateUserController = async (
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

// Patch user
export const patchUserController = async (
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

// Delete user
export const deleteUserController = async (
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

// Filter users
export const filterUsersController = async (
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
