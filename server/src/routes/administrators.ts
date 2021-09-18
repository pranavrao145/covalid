import exp from 'constants';
import express from 'express';
import { get } from 'https';
import { createAdministrator, deleteAdministrator, getAdministrator, getAllAdministrators, updateAdministrator } from '../controllers/administrators';

const router = express.Router();
router.get("/",getAllAdministrators)
router.get("/:firebase_uid", getAdministrator)
router.post("/", createAdministrator)
router.put("/:firebase_uid", updateAdministrator)
router.delete("/:firebase_uid",deleteAdministrator)

export default router;

