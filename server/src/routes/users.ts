import exp from 'constants';
import express from 'express';
import { get } from 'https';
import { getUser,getAllUsers,updateUser,deleteUser } from '../controllers/users';

const router = express.Router();
router.get("/users", getAllUsers)
router.get("/users/:uid", getUser)
router.put("/users/:uid", updateUser)
router.delete("/users/:uid", deleteUser)

export default router;

