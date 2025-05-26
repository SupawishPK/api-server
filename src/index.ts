import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { authMiddleware } from "./middleware/auth.middleware";
import routes from "./routes";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Auth middleware
app.use(authMiddleware);

// Routes
app.use("/api/v1", routes);

// Health check endpoint
app.get("/health", (_, res) => {
  res.json({ status: "ok" });
});

// Error handling middleware
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong!" });
  }
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
