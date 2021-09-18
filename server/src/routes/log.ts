import exp from 'constants';
import express from 'express';
import { get } from 'https';
import { createLog, deleteLog, getAllLogs, getLog, updateLog } from '../controllers/logs';

const router = express.Router();
router.get("/logs/:uid",getLog)
router.get("/logs",getAllLogs)
router.post("/logs", createLog)
router.put("/logs/:uid", updateLog)
router.delete("/logs/:uid",deleteLog)

export default router;

