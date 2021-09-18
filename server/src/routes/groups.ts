import exp from 'constants';
import express from 'express';
import { get } from 'https';
import { createGroup, deleteGroup, getAllGroups, getGroup, updateGroup } from '../controllers/groups';

const router = express.Router();
router.get("/groups/:uid",getGroup)
router.get("/groups",getAllGroups)
router.post("/groups", createGroup)
router.put("/groups/:uid", updateGroup)
router.delete("/groups/:uid",deleteGroup)

export default router;

