import exp from 'constants';
import express from 'express';
import { get } from 'https';
import { createOrganization, deleteOrganization, getAllOrganizations, getOrganization, updateOrganization } from '../controllers/organizations';

const router = express.Router();
router.get("/organizations/:uid",getOrganization)
router.get("/organizations",getAllOrganizations)
router.post("/organizations", createOrganization)
router.put("/organizations/:uid", updateOrganization)
router.delete("/organizations/:uid",deleteOrganization)

export default router;

