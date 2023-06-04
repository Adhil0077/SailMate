import express from "express";
import {protect} from "../Middleware/authMiddleware.js";
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
router
  .route("/userprofile")
  .get(protect, userProfile)
  .put(protect, userProfileUpdate);

export default router;
