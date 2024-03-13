import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./user.routes.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(process.env.PORT, () => {
  console.log("listening on PORT: ", process.env.PORT);
});

app.use("/api/user", userRouter);

app.use((error, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = erro.message || "Internal server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
