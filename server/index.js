import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

import userRoutes from "./routes/users.js";

dotenv.config();

const app = express();
const corsOptions = {
  origin: "http://localhost:5173",
  //   origin: "https://mern-task-master-client-5l5z.onrender.com",
  // origin: "",
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));

app.use((req, res, next) => {
  next();
});

app.use("/api/user", userRoutes);

// hold absolute path of current working directory
const __dirname = path.resolve();

// tell express to serve static files from the '/client/dist
app.use(express.static(path.join(__dirname, "/client/dist")));

// respond to all get requests by sending the html file in /client/dist directory
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected");
    app.listen(process.env.PORT, () => {
      console.log("listening on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
