import express, { Application } from "express";
import userRoutes from "./user";
import postRoutes from "./post";

const app: Application = express();

app.use("/users", userRoutes);
app.use("/posts", postRoutes);

export default app;
