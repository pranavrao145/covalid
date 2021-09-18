import { Request, Response } from "express";
import { createConnection } from "typeorm";
import { Administrator } from "../entities/Administrator";
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

// GET /organizations/:id/administrators
export const getOrganizationAdministrators = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the organization repository
    const repository = connection.getRepository(Organization);

    try {
        // get the organization with the uid specified
        const organization = await repository.findOne(req.params.id);
        // get the administrators of the organization
        const administrators = organization!.administrators;
        res.status(200).json(administrators);
    } catch (e) {
        res.status(404).json({ message: "An error occurred fetching this organization's administrators." });
    }
}

// POST /organization/:id/add_administrator/:firebase_uid
export const addAdministratorToOrganization = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the organization repository
    const organizationRepository = connection.getRepository(Organization);

    // access the administrator repository
    const administratorRepository = connection.getRepository(Administrator);

    let organization: any;

    try {
        // get the organization with the id specified
        organization = await organizationRepository.findOne(req.params.id);
    } catch (e) {
        res.status(404).json({ message: "An error occurred adding the administrator to the organization." });
    }

    let administrator: any;

    try {
        // get the administrator with the uid specified
        administrator = await administratorRepository.findOne({ firebase_uid: req.params.firebase_uid });
    } catch (e) {
        res.status(404).json({ message: "An error occurred adding the administrator to the organization." });
    }

    // add the administrator to the organization
    organization!.administrators.push(administrator!);

    // add the organization to the administrator
    administrator!.organizations.push(organization!);

    try {
        // save the administrator and the organization
        await organizationRepository.save(organization!);
        await administratorRepository.save(administrator!);

        res.status(200).json({ message: "Success!" });
    } catch (e) {
        res.status(404).json({ message: "An error occurred adding the administrator to the organization." });
    }
}

// POST /organization/:id/remove_administrator/:firebase_uid
export const removeAdministratorFromOrganization = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the organization repository
    const organizationRepository = connection.getRepository(Organization);

    // access the administrator repository
    const administratorRepository = connection.getRepository(Administrator);

    let organization: any;

    try {
        // get the organization with the id specified
        organization = await organizationRepository.findOne(req.params.id);
    } catch (e) {
        res.status(404).json({ message: "An error occurred removing the administrator from the organization." });
    }

    let administrator: any;

    try {
        // get the administrator with the uid specified
        administrator = await administratorRepository.findOne({ firebase_uid: req.params.firebase_uid });
    } catch (e) {
        res.status(404).json({ message: "An error occurred removing the administrator from the organization." });
    }

    // remove the administrator from the organization
    organization!.administrators.forEach((item: any, index: any) => {
        if (item === administrator) organization!.administrators.splice(index, 1);
    });

    // remove the organization from the administrator
    administrator!.organizations.forEach((item: any, index: any) => {
        if (item === organization) administrator!.organizations.splice(index, 1);
    });

    try {
        // save the administrator and the organization
        await organizationRepository.save(organization!);
        await administratorRepository.save(administrator!);

        res.status(200).json({ message: "Success!" });
    } catch (e) {
        res.status(404).json({ message: "An error occurred removing the administrator from the organization." });
    }
}

