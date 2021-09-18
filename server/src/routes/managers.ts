import exp from 'constants';
import express from 'express';
import { get } from 'https';
import { createManager, deleteManager, getAllManagers, getManager, updateManager } from '../controllers/managers';

const router = express.Router();
router.get("/managers/:uid",getManager)
router.get("/managers",getAllManagers)
router.post("/managers", createManager)
router.put("/managers/:uid", updateManager)
router.delete("/managers/:uid",deleteManager)

export default router;

