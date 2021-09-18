import { Request, Response } from "express";
import { createConnection } from "typeorm";
import { Organization } from "../entities/Organization";

// GET /organizations/:id
export const getOrganization = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the organization repository
    const repository = connection.getRepository(Organization);

    try {
        // get the organization with the uid specified
        const organization = await repository.findOne(req.params.id);
        res.status(200).json(organization);
    } catch (e) {
        res.status(404).json({ message: "An error occurred fetching this organization." });
    }
}

// GET /organizations
export const getAllOrganizations = async (_req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the organization repository
    const repository = connection.getRepository(Organization);

    try {
        // get all the organizations in the database
        const organizations = await repository.find();
        res.status(200).json(organizations);
    } catch (e) {
        res.status(404).json({ message: "An error occurred fetching all organizations." });
    }
}

// POST /organizations
export const createOrganization = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the organization repository
    const repository = connection.getRepository(Organization);

    try {
        // create a new organization with the given information
        const organization = repository.create(req.body);

        // save the new organization
        const saveResults = await repository.save(organization!);

        res.status(200).json(saveResults);
    } catch (e) {
        res.status(404).json({ message: "An error occurred creating this organization." });
    }
}

// PUT /organizations/:id
export const updateOrganization = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the organization repository
    const repository = connection.getRepository(Organization);

    try {
        // get the organization with the uid specified
        const organization = await repository.findOne(req.params.id);

        // update the organization data
        repository.merge(organization!, req.body);

        // save the organization with the new details
        const saveResults = await repository.save(organization!);

        res.status(200).json(saveResults);
    } catch (e) {
        res.status(404).json({ message: "An error occurred updating this organization." });
    }
}

// DELETE /organizations/:id
export const deleteOrganization = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the organization repository
    const repository = connection.getRepository(Organization);

    try {
        // get the organization with the uid specified
        const organization = await repository.findOne(req.params.id);
 
        // delete the organization 
        const saveResults = await repository.delete(organization!);

        res.status(200).json(saveResults);
    } catch (e) {
        res.status(404).json({ message: "An error occurred deleting this organization." });
    }
}

// GET /organizations/:id/groups
export const getOrganizationGroups = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the organization repository
    const repository = connection.getRepository(Organization);

    try {
        // get the organization with the uid specified
        const organization = await repository.findOne(req.params.id);
        // get the groups of the organization
        const groups = organization!.groups;
        res.status(200).json(groups);
    } catch (e) {
        res.status(404).json({ message: "An error occurred fetching this organization's groups." });
    }
}
