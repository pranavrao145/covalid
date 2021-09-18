import express, { Router } from 'express';
import { getUser, getAllUsers, updateUser, deleteUser } from '../controllers/users';

const router: Router = express.Router();

router.get("/", getAllUsers)
router.get("/:uid", getUser)
router.put("/:uid", updateUser)
router.delete("/:uid", deleteUser)

export default router;
