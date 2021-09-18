import express, { Router } from 'express';
import { createGroup, deleteGroup, getAllGroups, getGroup, updateGroup, getGroupManagers, getGroupOrganization, addManagerToGroup, addMemberToGroup } from '../controllers/groups';

const router: Router = express.Router();

router.get("/:uid", getGroup)
router.get("/", getAllGroups)
router.post("/", createGroup)
router.put("/:uid", updateGroup)
router.delete("/:uid", deleteGroup)
router.get("/:id/organization", getGroupOrganization)
router.get("/:id/managers",getGroupManagers)
router.post("/:id/add_manager/:firebase_uid", addManagerToGroup)
router.post("/:id/add_member/firebase_uid", addMemberToGroup)


export default router;
