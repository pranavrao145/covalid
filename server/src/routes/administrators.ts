import express, { Router } from 'express';
import { createAdministrator, deleteAdministrator, getAdministrator, getAllAdministrators, updateAdministrator, getAdminOrganizations } from '../controllers/administrators';

const router: Router = express.Router();

router.get("/", getAllAdministrators)
router.get("/:firebase_uid", getAdministrator)
router.post("/", createAdministrator)
router.put("/:firebase_uid", updateAdministrator)
router.delete("/:firebase_uid", deleteAdministrator)
router.get("/:id/admins", getAdminOrganizations)

export default router;
