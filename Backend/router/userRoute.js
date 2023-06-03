import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  userProfile,
  userProfileUpdate,
} from "../controllers/userController.js";
const router = express.Router();

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.route("/userprofile").get(userProfile).put(userProfileUpdate);

export default router;
