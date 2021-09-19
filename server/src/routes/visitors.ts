import express, { Router } from 'express';
import { createVisitor, deleteVisitor, getAllVisitors, getVisitor, updateVisitor } from '../controllers/visitors';

const router: Router = express.Router();

router.get("/:firebase_uid", getVisitor)
router.get("/", getAllVisitors)
router.post("/", createVisitor)
router.put("/:firebase_uid", updateVisitor)
router.delete("/:firebase_uid", deleteVisitor)

export default router;
