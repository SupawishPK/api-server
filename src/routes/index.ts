import express, { Application } from "express";
import userRoutes from "./user.routes";
import postRoutes from "./post.routes";

const app: Application = express();

app.use("/users", userRoutes);
app.use("/posts", postRoutes);

export default app;
