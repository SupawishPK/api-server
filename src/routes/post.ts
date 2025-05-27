import { Router } from "express";
import getAllPostsController from "../controllers/post/getAllPosts";
import createPostController from "../controllers/post/createPost";
import getPostByIdController from "../controllers/post/getPostById";
import updatePostController from "../controllers/post/updatePost";
import patchPostController from "../controllers/post/patchPost";
import deletePostController from "../controllers/post/deletePost";

const router = Router();

router.get("/", getAllPostsController);

router.get("/:id", getPostByIdController);

router.post("/", createPostController);

router.put("/:id", updatePostController);

router.patch("/:id", patchPostController);

router.delete("/:id", deletePostController);


export default router;
