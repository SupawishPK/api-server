import { Router } from "express";
import {
  getAllUsersController,
  getUserByIdController,
  createUserController,
  updateUserController,
  patchUserController,
  deleteUserController,
  filterUsersController,
} from "../controllers/user";

const router = Router();

// Filter users
router.get("/filter", filterUsersController);

// Get all users
router.get("/", getAllUsersController);

// Get user by ID
router.get("/:id", getUserByIdController);

// Create user
router.post("/", createUserController);

// Update user
router.put("/:id", updateUserController);

// Patch user
router.patch("/:id", patchUserController);

// Delete user
router.delete("/:id", deleteUserController);

export default router;
