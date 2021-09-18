import express from 'express';
import { createManager, deleteManager, getAllManagers, getManager, updateManager } from '../controllers/managers';

const router = express.Router();

router.get("/:uid", getManager)
router.get("/", getAllManagers)
router.post("/", createManager)
router.put("/:uid", updateManager)
router.delete("/:uid", deleteManager)

export default router;
