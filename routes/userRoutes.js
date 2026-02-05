import express from "express";

import {
    createUser,
    getUsers,
    updateUser,
    deleteUser
} from "../controllers/userController.js";

import { checkAuth } from "../middlewares/auth.js";
import { validateUser } from "../middlewares/validateUser.js";

const router = express.Router();

router.post("/", checkAuth, validateUser, createUser);
router.get("/", checkAuth, getUsers);
router.put("/:id", checkAuth, validateUser, updateUser);
router.delete("/:id", checkAuth, deleteUser);

export default router;
