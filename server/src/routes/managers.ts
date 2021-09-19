import express, { Router } from 'express';
import { createManager, deleteManager, getAllManagers, getManager, updateManager, getManagerGroups } from '../controllers/managers';

const router: Router = express.Router();

router.get("/:firebase_uid", getManager)
router.get("/", getAllManagers)
router.post("/", createManager)
router.put("/:firebase_uid", updateManager)
router.delete("/:firebase_uid", deleteManager)
router.get("/:id/groups", getManagerGroups)

export default router;
