import { Router } from "express";
import getAllPostsController from "../controllers/post/getAllPosts";
import createPostController from "../controllers/post/createPost";
import getPostByIdController from "../controllers/post/getPostById";
import updatePostController from "../controllers/post/updatePost";
import patchPostController from "../controllers/post/patchPost";
import deletePostController from "../controllers/post/deletePost";
import { validateSchema } from "../middleware/validation.middleware";
import { object, string, number } from "zod";

const createPostSchema = object({
  title: string().min(1),
  body: string().min(1),
  authorId: number().int().positive(),
});

const updatePostSchema = object({
  title: string().min(1),
  body: string().min(1),
});

const patchPostSchema = object({
  title: string().min(1).optional(),
  body: string().min(1).optional(),
});

const router = Router();

router.get("/", getAllPostsController);

router.get("/:id", getPostByIdController);

router.post("/", validateSchema(createPostSchema), createPostController);

router.put("/:id", validateSchema(updatePostSchema), updatePostController);

router.patch("/:id", validateSchema(patchPostSchema), patchPostController);

router.delete("/:id", deletePostController);

export default router;
