import { Router } from "express";
import {
  getPostById,
  createPost,
  updatePost,
  patchPost,
  deletePost,
  getAllPosts,
} from "../controllers/post.controller";

const router = Router();

// Get all posts
router.get("/", getAllPosts);

// Get post by ID
router.get("/:id", getPostById);

// Create post
router.post("/", createPost);

// Update post
router.put("/:id", updatePost);

// Patch post
router.patch("/:id", patchPost);

// Delete post
router.delete("/:id", deletePost);

export default router;
