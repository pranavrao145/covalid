import express, { Router } from 'express';
import { createMember, deleteMember, getAllMembers, getMember, updateMember, getMemberGroups } from '../controllers/members';

const router: Router = express.Router();

router.get("/:firebase_uid", getMember)
router.get("/", getAllMembers)
router.post("/", createMember)
router.put("/:firebase_uid", updateMember)
router.delete("/:firebase_uid", deleteMember)
router.get("/:id/groups", getMemberGroups)

export default router;
