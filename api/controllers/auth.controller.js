import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const signup = async (req, res, next) => {
  console.log(req.body);
  const { email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    next(error);
  }
};
