import express, { Router } from 'express';
import { createMember, deleteMember, getAllMembers, getMember, updateMember, getMemberGroups} from '../controllers/members';

const router: Router = express.Router();

router.get("/:uid", getMember)
router.get("/", getAllMembers)
router.post("/", createMember)
router.put("/:uid", updateMember)
router.delete("/:uid", deleteMember)
router.get("/:id/groups",getMemberGroups)

export default router;
