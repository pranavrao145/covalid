import exp from 'constants';
import express from 'express';
import { get } from 'https';
import { createGroup, deleteGroup, getAllGroups, getGroup, updateGroup } from '../controllers/groups';

const router = express.Router();
router.get("/:uid",getGroup)
router.get("/",getAllGroups)
router.post("/", createGroup)
router.put("/:uid", updateGroup)
router.delete("//:uid",deleteGroup)

export default router;

