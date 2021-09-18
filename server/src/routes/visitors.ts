import express, { Router } from 'express';
import { createVisitor, deleteVisitor, getAllVisitors, getVisitor, updateVisitor } from '../controllers/visitors';

const router: Router = express.Router();

router.get("/:uid", getVisitor)
router.get("/", getAllVisitors)
router.post("/", createVisitor)
router.put("/:uid", updateVisitor)
router.delete("/:uid", deleteVisitor)

export default router;