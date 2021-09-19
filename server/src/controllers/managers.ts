import { Request, Response } from "express";
import { createConnection } from "typeorm";
import { Manager } from "../entities/Manager";

// GET /managers/:firebase_uid
export const getManager = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the manager repository
    const repository = connection.getRepository(Manager);

    try {
        // get the manager with the uid specified
        const manager = await repository.findOne({ firebase_uid: req.params.firebase_uid });
        res.status(200).json(manager);
    } catch (e) {
        res.status(404).json({ message: "An error occurred fetching this manager." });
    }
}

// GET /managers
export const getAllManagers = async (_req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the manager repository
    const repository = connection.getRepository(Manager);

    try {
        // get all the managers in the database
        const managers = await repository.find();
        res.status(200).json(managers);
    } catch (e) {
        res.status(404).json({ message: "An error occurred fetching all managers." });
    }
}

// POST /managers
export const createManager = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the manager repository
    const repository = connection.getRepository(Manager);

    try {
        // create a new manager with the given information
        const manager = repository.create(req.body);

        // save the new manager
        const saveResults = await repository.save(manager!);

        res.status(200).json(saveResults);
    } catch (e) {
        res.status(404).json({ message: "An error occurred creating this manager." });
    }
}

// PUT /managers/:firebase_uid
export const updateManager = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the manager repository
    const repository = connection.getRepository(Manager);

    try {
        // get the manager with the uid specified
        const manager = await repository.findOne({ firebase_uid: req.params.firebase_uid });

        // update the manager data
        repository.merge(manager!, req.body);

        // save the manager with the new details
        const saveResults = await repository.save(manager!);

        res.status(200).json(saveResults);
    } catch (e) {
        res.status(404).json({ message: "An error occurred updating this manager." });
    }
}

// DELETE /managers/:firebase_uid
export const deleteManager = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the manager repository
    const repository = connection.getRepository(Manager);

    try {
        // get the manager with the uid specified
        const manager = await repository.findOne({ firebase_uid: req.params.firebase_uid });

        // delete the manager 
        const saveResults = await repository.delete(manager!);

        res.status(200).json(saveResults);
    } catch (e) {
        res.status(404).json({ message: "An error occurred deleting this manager." });
    }
}

// GET /managers/:firebase_uid/groups
export const getManagerGroups = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the manager repository
    const repository = connection.getRepository(Manager);

    try {
        // get the manager with the uid specified
        const manager = await repository.findOne({ firebase_uid: req.params.firebase_uid });
        // get the groups of the manager
        const groups = manager!.groups;
        res.status(200).json(groups);
    } catch (e) {
        res.status(404).json({ message: "An error occurred fetching this manager's groups." });
    }
}
