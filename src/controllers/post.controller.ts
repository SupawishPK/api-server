import { PrismaClient } from "../generated/prisma";
import { NextFunction, Request, Response } from "express";

const prisma = new PrismaClient();

export const getAllPosts = async (
  _: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: true,
      },
    });
    res.json(posts);
  } catch (error) {
    next(error);
  }
};

// Get post by ID
export const getPostById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const post = await prisma.post.findUnique({
      where: { id: Number(id) },
      include: {
        author: true,
      },
    });
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Error fetching post" });
  }
};

// Create post
export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, body, authorId } = req.body;
    const post = await prisma.post.create({
      data: {
        title,
        body,
        authorId: Number(authorId),
      },
      include: {
        author: true,
      },
    });
    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};

// Update post
export const updatePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { title, body } = req.body;
    const post = await prisma.post.update({
      where: { id: Number(id) },
      data: {
        title,
        body,
      },
      include: {
        author: true,
      },
    });
    res.json(post);
  } catch (error) {
    next(error);
  }
};

// Patch post
export const patchPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const post = await prisma.post.update({
      where: { id: Number(id) },
      data: req.body,
      include: {
        author: true,
      },
    });
    res.json(post);
  } catch (error) {
    next(error);
  }
};

// Delete post
export const deletePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    await prisma.post.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
