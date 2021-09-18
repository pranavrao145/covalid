import express, { Router } from 'express';
import { createOrganization, deleteOrganization, getAllOrganizations, getOrganization, updateOrganization, getOrganizationGroups, addAdminToOrg, getOrganizationAdmins, deleteOrganizationAdministrator} from '../controllers/organizations';

const router: Router = express.Router();

router.get("/:uid", getOrganization)
router.get("/", getAllOrganizations)
router.post("/", createOrganization)
router.put("/:uid", updateOrganization)
router.delete("/:uid", deleteOrganization)
router.get("/:id/groups", getOrganizationGroups)
router.post("/:id/add_administrator/:firebase_uid",addAdminToOrg)
router.delete("/:id/remove_administrator",deleteOrganizationAdministrator)
router.get("/:id/admins",getOrganizationAdmins)

export default router;
