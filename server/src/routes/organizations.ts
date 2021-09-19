import express, { Router } from 'express';
import { createOrganization, deleteOrganization, getAllOrganizations, getOrganization, updateOrganization, getOrganizationGroups, addAdministratorToOrganization, getOrganizationAdministrators, removeAdministratorFromOrganization } from '../controllers/organizations';

const router: Router = express.Router();

router.get("/:firebase_uid", getOrganization)
router.get("/", getAllOrganizations)
router.post("/", createOrganization)
router.put("/:firebase_uid", updateOrganization)
router.delete("/:firebase_uid", deleteOrganization)
router.get("/:id/groups", getOrganizationGroups)
router.post("/:id/add_administrator/:firebase_uid", addAdministratorToOrganization)
router.delete("/:id/remove_administrator/:firebase_uid", removeAdministratorFromOrganization)
router.get("/:id/admins", getOrganizationAdministrators)

export default router;
