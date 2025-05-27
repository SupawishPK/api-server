import { Router } from "express";
import getAllPosts from "../services/post/getAllPosts";
import getPostById from "../services/post/getPostById";
import createPost from "../services/post/createPost";
import updatePost from "../services/post/updatePost";
import patchPost from "../services/post/patchPost";
import deletePost from "../services/post/deletePost";

const router = Router();

router.get("/", getAllPosts);

router.get("/:id", getPostById);

router.post("/", createPost);

router.put("/:id", updatePost);

router.patch("/:id", patchPost);

router.delete("/:id", deletePost);

export default router;
