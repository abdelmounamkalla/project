import { protect } from "../middleware/auth.js";
import express from "express";
import {registerUser,loginUser,getMe} from "../controllers/user.js";
const router = express.Router();

router.post('/signup', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)

export default router;