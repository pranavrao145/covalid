import express, { Router } from 'express';
import { createOrganization, deleteOrganization, getAllOrganizations, getOrganization, updateOrganization } from '../controllers/organizations';

const router: Router = express.Router();

router.get("/:uid", getOrganization)
router.get("/", getAllOrganizations)
router.post("/", createOrganization)
router.put("/:uid", updateOrganization)
router.delete("/:uid", deleteOrganization)

export default router;
