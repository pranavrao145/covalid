import express, { Router } from 'express';
import { createManager, deleteManager, getAllManagers, getManager, updateManager, getManagerGroups } from '../controllers/managers';

const router: Router = express.Router();

router.get("/:uid", getManager)
router.get("/", getAllManagers)
router.post("/", createManager)
router.put("/:uid", updateManager)
router.delete("/:uid", deleteManager)
router.get("/:id/groups", getManagerGroups)

export default router;
