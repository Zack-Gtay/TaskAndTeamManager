import express from "express";
import { login, signUpAdmin } from "../contollers/auth.controller.js";

const router = express.Router();

router.post("/sign-up", signUpAdmin);
router.post("/log-in", login);

export default router;
