import exp from 'constants';
import express from 'express';
import { get } from 'https';
import { createMember, deleteMember, getAllMembers, getMember, updateMember } from '../controllers/members';

const router = express.Router();
router.get("/members/:uid",getMember)
router.get("/members",getAllMembers)
router.post("/members", createMember)
router.put("/members/:uid", updateMember)
router.delete("/members/:uid",deleteMember)

export default router;

