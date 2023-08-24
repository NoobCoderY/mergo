import express from "express"
import { loginUser, registerUser,logout } from "../controller/userController.js";

const router = express.Router();



router.get("/createuser", registerUser)
router.post("login", loginUser);
router.get("/logout",logout)

export default router;