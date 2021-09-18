import exp from 'constants';
import express from 'express';
import { get } from 'https';
import { createVisitor, deleteVisitor, getAllVisitors, getVisitor, updateVisitor } from '../controllers/visitors';

const router = express.Router();
router.get("/visitors/:uid",getVisitor)
router.get("/visitors",getAllVisitors)
router.post("/visitors", createVisitor)
router.put("/visitors/:uid", updateVisitor)
router.delete("/visitors/:uid",deleteVisitor)

export default router;

