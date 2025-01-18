import express from "express";
import { usersignup } from "../controller/usercontroller.js";

const router = express.Router();

router.post("/signup", usersignup);

export default router;
