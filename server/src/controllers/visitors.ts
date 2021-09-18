import { Request, Response } from "express";
import { createConnection } from "typeorm";
import { Visitor } from "../entities/Visitor";

// GET /visitors/:firebase_uid
export const getVisitor = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the visitor repository
    const repository = connection.getRepository(Visitor);

    try {
        // get the visitor with the uid specified
        const visitor = await repository.findOne({ firebase_uid: req.params.firebase_uid });
        res.status(200).json(visitor);
    } catch (e) {
        res.status(404).json({ message: "An error occurred fetching this visitor." });
    }
}

// GET /visitors
export const getAllVisitors = async (_req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the visitor repository
    const repository = connection.getRepository(Visitor);

    try {
        // get all the visitors in the database
        const visitors = await repository.find();
        res.status(200).json(visitors);
    } catch (e) {
        res.status(404).json({ message: "An error occurred fetching all visitors." });
    }
}

// POST /visitors
export const createVisitor = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the visitor repository
    const repository = connection.getRepository(Visitor);

    try {
        // create a new visitor with the given information
        const visitor = repository.create(req.body);

        // save the new visitor
        const saveResults = await repository.save(visitor!);

        res.status(200).json(saveResults);
    } catch (e) {
        res.status(404).json({ message: "An error occurred creating this visitor." });
    }
}

// PUT /visitors/:firebase_uid
export const updateVisitor = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the visitor repository
    const repository = connection.getRepository(Visitor);

    try {
        // get the visitor with the uid specified
        const visitor = await repository.findOne({ firebase_uid: req.params.firebase_uid });

        // update the visitor data
        repository.merge(visitor!, req.body);

        // save the visitor with the new details
        const saveResults = await repository.save(visitor!);

        res.status(200).json(saveResults);
    } catch (e) {
        res.status(404).json({ message: "An error occurred updating this visitor." });
    }
}

// DELETE /visitors/:firebase_uid
export const deleteVisitor = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the visitor repository
    const repository = connection.getRepository(Visitor);

    try {
        // get the visitor with the uid specified
        const visitor = await repository.findOne({ firebase_uid: req.params.firebase_uid });

        // delete the visitor 
        const saveResults = await repository.delete(visitor!);

        res.status(200).json(saveResults);
    } catch (e) {
        res.status(404).json({ message: "An error occurred deleting this visitor." });
    }
}
