import express from "express";
import { signupUser ,userLogin} from "../controller/usercontroller.js";

const router = express.Router();

// Existing product routes (if any)
// Add the signup route
router.post("/signup", signupUser);
router.post("/login", userLogin);

export default router;
