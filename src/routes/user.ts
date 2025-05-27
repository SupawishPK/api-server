import { Router } from "express";

import getAllUsersController from "../controllers/user/getAllUsers";
import getUserByIdController from "../controllers/user/getUserById";
import createUserController from "../controllers/user/createUser";
import updateUserController from "../controllers/user/updateUser";
import patchUserController from "../controllers/user/patchUser";
import deleteUserController from "../controllers/user/deleteUser";
import { validateSchema } from "../middleware/validation.middleware";
import { object, string } from "zod";

const createUserSchema = object({
  email: string().email(),
  name: string().min(2),
  username: string().min(2),
  phone: string().min(10),
  website: string().min(1),
});

const updateUserSchema = object({
  email: string().email(),
  name: string().min(2),
  username: string().min(2),
  phone: string().min(10),
  website: string().min(1),
});

const patchUserSchema = object({
  name: string().min(2).optional(),
  email: string().email().optional(),
  phone: string().min(10).optional(),
  website: string().min(1).optional(),
});

const router = Router();

router.get("/", getAllUsersController);

router.get("/:id", getUserByIdController);

router.post("/", validateSchema(createUserSchema), createUserController);

router.put("/:id", validateSchema(updateUserSchema), updateUserController);

router.patch("/:id", validateSchema(patchUserSchema), patchUserController);

router.delete("/:id", deleteUserController);

export default router;
