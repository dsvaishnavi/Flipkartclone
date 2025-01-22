import express from "express";
import { signupUser } from "../controller/usercontroller.js";

const router = express.Router();

// Existing product routes (if any)
// Add the signup route
router.post("/signup", signupUser);

export default router;
