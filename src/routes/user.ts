import { Router } from "express";

import getAllUsersController from "../controllers/user/getAllUsers";
import getUserByIdController from "../controllers/user/getUserById";
import createUserController from "../controllers/user/createUser";
import updateUserController from "../controllers/user/updateUser";
import patchUserController from "../controllers/user/patchUser";
import deleteUserController from "../controllers/user/deleteUser";

const router = Router();

router.get("/", getAllUsersController);

router.get("/:id", getUserByIdController);

router.post("/", createUserController);

router.put("/:id", updateUserController);

router.patch("/:id", patchUserController);

router.delete("/:id", deleteUserController);

export default router;
