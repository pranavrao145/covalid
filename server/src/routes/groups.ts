import express, { Router } from 'express';
import { createGroup, deleteGroup, getAllGroups, getGroup, updateGroup, getGroupManagers, getGroupOrganization, addManagerToGroup, addMemberToGroup, removeManagerFromGroup, removeMemberFromGroup } from '../controllers/groups';

const router: Router = express.Router();

router.get("/:firebase_uid", getGroup)
router.get("/", getAllGroups)
router.post("/", createGroup)
router.put("/:firebase_uid", updateGroup)
router.delete("/:firebase_uid", deleteGroup)
router.get("/:id/organization", getGroupOrganization)
router.get("/:id/managers", getGroupManagers)
router.post("/:id/add_manager/:firebase_uid", addManagerToGroup)
router.post("/:id/add_member/:firebase_uid", addMemberToGroup)
router.post("/:id/remove_manager/:firebase_uid", removeManagerFromGroup)
router.post("/:id/remove_member/:firebase_uid", removeMemberFromGroup)

export default router;
