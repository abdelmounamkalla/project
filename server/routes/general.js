import express from "express";
import { getUser } from "../controllers/general.js";

const router = express.Router();

router.get("/signup", getUser);

export default router