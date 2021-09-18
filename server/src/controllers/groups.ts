import { Request, Response } from "express";
import { createConnection } from "typeorm";
import { Group } from "../entities/Group";

// GET /groups/:id
export const getGroup = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the group repository
    const repository = connection.getRepository(Group);

    try {
        // get the group with the uid specified
        const group = await repository.findOne(req.params.id);
        res.status(200).json(group);
    } catch (e) {
        res.status(404).json({ message: "An error occurred fetching this group." });
    }
}

// GET /groups
export const getAllGroups = async (_req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the group repository
    const repository = connection.getRepository(Group);

    try {
        // get all the groups in the database
        const groups = await repository.find();
        res.status(200).json(groups);
    } catch (e) {
        res.status(404).json({ message: "An error occurred fetching all groups." });
    }
}

// POST /groups
export const createGroup = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the group repository
    const repository = connection.getRepository(Group);

    try {
        // create a new group with the given information
        const group = repository.create(req.body);

        // save the new group
        const saveResults = await repository.save(group!);

        res.status(200).json(saveResults);
    } catch (e) {
        res.status(404).json({ message: "An error occurred creating this group." });
    }
}

// PUT /groups/:id
export const updateGroup = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the group repository
    const repository = connection.getRepository(Group);

    try {
        // get the group with the uid specified
        const group = await repository.findOne(req.params.id);

        // update the group data
        repository.merge(group!, req.body);

        // save the group with the new details
        const saveResults = await repository.save(group!);

        res.status(200).json(saveResults);
    } catch (e) {
        res.status(404).json({ message: "An error occurred updating this group." });
    }
}

// DELETE /groups/:id
export const deleteGroup = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the group repository
    const repository = connection.getRepository(Group);

    try {
        // get the group with the uid specified
        const group = await repository.findOne(req.params.id);

        // delete the group 
        const saveResults = await repository.delete(group!);

        res.status(200).json(saveResults);
    } catch (e) {
        res.status(404).json({ message: "An error occurred deleting this group." });
    }
}

// GET /groups/:id/organization
export const getGroupOrganization = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the group repository
    const repository = connection.getRepository(Group);

    try {
        // get the group with the uid specified
        const group = await repository.findOne(req.params.id);
        // get the organization for this group
        const organization = group!.organization;
        res.status(200).json(organization);
    } catch (e) {
        res.status(404).json({ message: "An error occurred fetching this group's organization." });
    }
}

// GET /groups/:id/managers
export const getGroupManagers = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the group repository
    const repository = connection.getRepository(Group);

    try {
        // get the group with the uid specified
        const group = await repository.findOne(req.params.id);
        // get the managers of the group
        const managers = group!.managers;
        res.status(200).json(managers);
    } catch (e) {
        res.status(404).json({ message: "An error occurred fetching this group's managers." });
    }
}
