import express, { Router } from 'express';
import { getUser, getAllUsers, updateUser, deleteUser, getUserQuestionnaires } from '../controllers/users';

const router: Router = express.Router();

router.get("/", getAllUsers)
router.get("/:firebase_uid", getUser)
router.put("/:firebase_uid", updateUser)
router.delete("/:firebase_uid", deleteUser)
router.get("/:firebase_uid/questionnaires", getUserQuestionnaires)

export default router;
