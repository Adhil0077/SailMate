import asyncHandler from 'express-async-handler'


//@ desc  Auth user /set token
//route   POST api/users/auth
//@access Public
const authUser = asyncHandler(async(req,res)=>{
  
 res.status(200).json({message:"auth user"})
})


//@ desc  register new user
//route   POST api/users/register
//@access Public
const registerUser = asyncHandler(async(req,res)=>{
  console.log(req.body)
  res.status(200).json({message:"register user"})
})


//@ desc  logout user/distroy token
//route   POST api/users/logout
//@access Public
const logoutUser = asyncHandler(async(req,res)=>{
  res.status(200).json({message:"logged out"})
})


//@ desc  user profile
//route   GET api/users/userProfile
//@access Private
const userProfile = asyncHandler(async(req,res)=>{
  res.status(200).json({message:"user profile"})
})


//@ desc  user profile update
//route   PUT api/users/userProfile
//@access Private
const userProfileUpdate = asyncHandler(async(req,res)=>{
  res.status(200).json({message:"user profile update"})
})


export{
  authUser,
  registerUser,
  logoutUser,
  userProfile,
  userProfileUpdate
}