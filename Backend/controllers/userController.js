import asyncHandler from "express-async-handler";
import User from "../model/userModel.js";
import generateToken from "../utils/generatejwt.js";

//@ desc  Auth user /set token
//route   POST api/users/auth
//@access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("invalid Email or Password");
  }
});

//@ desc  register new user
//route   POST api/users/register
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
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
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
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
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "User logged out" });
});

//@ desc  user profile
//route   GET api/users/userProfile
//@access Private
const userProfile = asyncHandler(async (req, res) => {
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  };

  res.status(200).json(user);
});

//@ desc  user profile update
//route   PUT api/users/userProfile
//@access Private
const userProfileUpdate = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if(req.body.password){
      user.password = req.body.password 
    }

   const userProfileUpdated =  await user.save()
   res.status(200).json({
    _id:userProfileUpdated._id,
    name:userProfileUpdated.name,
    email:userProfileUpdated.email,

   })
  }else{
    res.status(401)
    throw new Error("user not found")
  }
});

export { authUser, registerUser, logoutUser, userProfile, userProfileUpdate };
