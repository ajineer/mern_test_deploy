import User from "../models/user.model";
import bcrypt from "bcrypt";
import { errorHandler } from "../utils/error";

export const signup = async (req, res, next) => {
  const { username, email, password } = res.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    next(error);
  }
};
