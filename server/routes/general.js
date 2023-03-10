import express from "express";
import { getUser,postUser,putUser,deleteUser } from "../controllers/general.js";

const router = express.Router();

router.get("/",getUser);
router.post("/",postUser);
router.put("/:id",putUser);
router.delete("/:id",deleteUser);

export default router