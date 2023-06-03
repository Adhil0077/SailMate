import asyncHandler from "express-async-handler";
import User from "../model/userModel.js";

//@ desc  Auth user /set token
//route   POST api/users/auth
//@access Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "auth user" });
});

//@ desc  register new user
//route   POST api/users/register
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email: email });
  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user.Id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user");
  }
});

//@ desc  logout user/distroy token
//route   POST api/users/logout
//@access Public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "logged out" });
});

//@ desc  user profile
//route   GET api/users/userProfile
//@access Private
const userProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "user profile" });
});

//@ desc  user profile update
//route   PUT api/users/userProfile
//@access Private
const userProfileUpdate = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "user profile update" });
});

export { authUser, registerUser, logoutUser, userProfile, userProfileUpdate };
