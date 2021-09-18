import express, { Router } from 'express';
import { createGroup, deleteGroup, getAllGroups, getGroup, updateGroup } from '../controllers/groups';

const router: Router = express.Router();

router.get("/:uid", getGroup)
router.get("/", getAllGroups)
router.post("/", createGroup)
router.put("/:uid", updateGroup)
router.delete("/:uid", deleteGroup)

export default router;