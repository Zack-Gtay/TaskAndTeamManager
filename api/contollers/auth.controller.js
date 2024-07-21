import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { errorHandlerFunc } from "../utils/error.js";

export const signUpAdmin = async (req, res, next) => {
  const { fullname, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    user = new User({
      fullname,
      email,
      password: hashedPassword,
      role: "admin",
      isAdmin: true,
    });

    await user.save();

    res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const CheckUser = await User.findOne({ email: email });
    if (!CheckUser) return next(errorHandlerFunc(404, "User not found!"));
    const validPassword = bcryptjs.compareSync(password, CheckUser.password);
    if (!validPassword)
      return next(errorHandlerFunc(401, "Incorrect login information!"));
    const token = jwt.sign({ id: CheckUser._id }, process.env.JWT_SECRET); // created the token

    const { password: hashedPassword, ...rest } = CheckUser._doc; // returning everything except the password

    // save the access token as Cookie
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
