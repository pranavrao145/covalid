import { Request, Response } from "express";
import { createConnection } from "typeorm";
import { Administrator } from "../entities/Administrator";

// GET /administrators/:firebase_uid
export const getAdministrator = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the administrator repository
    const repository = connection.getRepository(Administrator);

    try {
        // get the administrator with the uid specified
        const administrator = await repository.findOne({ firebase_uid: req.params.firebase_uid });
        res.status(200).json(administrator);
    } catch (e) {
        res.status(404).json({ message: "An error occurred fetching this administrator." });
    }
}

// GET /administrators
export const getAllAdministrators = async (_req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the administrator repository
    const repository = connection.getRepository(Administrator);

    try {
        // get all the administrators in the database
        const administrators = await repository.find();
        res.status(200).json(administrators);
    } catch (e) {
        res.status(404).json({ message: "An error occurred fetching all administrators." });
    }
}

// POST /administrators
export const createAdministrator = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the administrator repository
    const repository = connection.getRepository(Administrator);

    try {
        // create a new administrator with the given information
        const administrator = repository.create(req.body);

        // save the new administrator
        const saveResults = await repository.save(administrator!);

        res.status(200).json(saveResults);
    } catch (e) {
        res.status(404).json({ message: "An error occurred creating this administrator." });
    }
}

// PUT /administrators/:firebase_uid
export const updateAdministrator = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the administrator repository
    const repository = connection.getRepository(Administrator);

    try {
        // get the administrator with the uid specified
        const administrator = await repository.findOne({ firebase_uid: req.params.firebase_uid });

        // update the administrator data
        repository.merge(administrator!, req.body);

        // save the administrator with the new details
        const saveResults = await repository.save(administrator!);

        res.status(200).json(saveResults);
    } catch (e) {
        res.status(404).json({ message: "An error occurred updating this administrator." });
    }
}

// DELETE /administrators/:firebase_uid
export const deleteAdministrator = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the administrator repository
    const repository = connection.getRepository(Administrator);

    try {
        // get the administrator with the uid specified
        const administrator = await repository.findOne({ firebase_uid: req.params.firebase_uid });

        // delete the administrator 
        const saveResults = await repository.delete(administrator!);

        res.status(200).json(saveResults);
    } catch (e) {
        res.status(404).json({ message: "An error occurred deleting this administrator." });
    }
}

// GET /administrators/:firebase_uid/organizations
export const getAdministratorOrganizations = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the administrator repository
    const repository = connection.getRepository(Administrator);

    try {
        // get the administrator with the uid specified
        const administrator = await repository.findOne({ firebase_uid: req.params.firebase_uid });
        // get the organizations of the administrator
        const organizations = administrator!.organizations;
        res.status(200).json(organizations);
    } catch (e) {
        res.status(404).json({ message: "An error occurred fetching this administrator's organizations." });
    }
}
