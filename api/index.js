import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./user.routes.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const __dirname = path.resolve();

const app = express();

// const corsOptions = {
//   origin: "http://localhost:5173",
// };

app.use(express.json());
app.use(cors());

// Set a more permissive referrer policy
app.use((req, res, next) => {
  res.setHeader("Referrer-Policy", "no-referrer-when-downgrade");
  next();
});

app.use(cookieParser());

app.listen(process.env.PORT, () => {
  console.log("listening on PORT: ", process.env.PORT);
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
