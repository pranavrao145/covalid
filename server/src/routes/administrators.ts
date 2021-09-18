import exp from 'constants';
import express from 'express';
import { get } from 'https';
import { createAdministrator, deleteAdministrator, getAdministrator, getAllAdministrators, updateAdministrator } from '../controllers/administrators';

const router = express.Router();
router.get("/administrator",getAllAdministrators)
router.get("/administrator/:firebase_uid", getAdministrator)
router.post("/administrator", createAdministrator)
router.put("/administrator/:firebase_uid", updateAdministrator)
router.delete("/administrator/:firebase_uid",deleteAdministrator)

export default router;

