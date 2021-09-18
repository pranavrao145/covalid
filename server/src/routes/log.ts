import express from 'express';
import { createLog, deleteLog, getAllLogs, getLog, updateLog } from '../controllers/logs';

const router = express.Router();

router.get("/:uid", getLog)
router.get("/", getAllLogs)
router.post("/", createLog)
router.put("/:uid", updateLog)
router.delete("/:uid", deleteLog)

export default router;
