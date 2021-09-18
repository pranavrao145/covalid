import { Request, Response } from "express";
import { createConnection } from "typeorm";
import { Log } from "../entities/Log";

// GET /logs/:id
export const getLog = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the log repository
    const repository = connection.getRepository(Log);

    try {
        // get the log with the uid specified
        const log = await repository.findOne(req.params.id);
        res.status(200).json(log);
    } catch (e) {
        res.status(404).json({ message: "An error occurred fetching this log." });
    }
}

// GET /logs
export const getAllLogs = async (_req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the log repository
    const repository = connection.getRepository(Log);

    try {
        // get all the logs in the database
        const logs = await repository.find();
        res.status(200).json(logs);
    } catch (e) {
        res.status(404).json({ message: "An error occurred fetching all logs." });
    }
}

// POST /logs
export const createLog = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the log repository
    const repository = connection.getRepository(Log);

    try {
        // create a new log with the given information
        const log = repository.create(req.body);

        // save the new log
        const saveResults = await repository.save(log!);

        res.status(200).json(saveResults);
    } catch (e) {
        res.status(404).json({ message: "An error occurred creating this log." });
    }
}

// PUT /logs/:id
export const updateLog = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the log repository
    const repository = connection.getRepository(Log);

    try {
        // get the log with the uid specified
        const log = await repository.findOne(req.params.id);

        // update the log data
        repository.merge(log!, req.body);

        // save the log with the new details
        const saveResults = await repository.save(log!);

        res.status(200).json(saveResults);
    } catch (e) {
        res.status(404).json({ message: "An error occurred updating this log." });
    }
}

// DELETE /logs/:id
export const deleteLog = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the log repository
    const repository = connection.getRepository(Log);

    try {
        // get the log with the uid specified
        const log = await repository.findOne(req.params.id);
 
        // delete the log 
        const saveResults = await repository.delete(log!);

        res.status(200).json(saveResults);
    } catch (e) {
        res.status(404).json({ message: "An error occurred deleting this log." });
    }
}
