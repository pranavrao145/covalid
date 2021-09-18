import { Request, Response } from "express";
import { createConnection } from "typeorm";
import { Member } from "../entities/Member";

// GET /members/:firebase_uid
export const getMember = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the member repository
    const repository = connection.getRepository(Member);

    try {
        // get the member with the uid specified
        const member = await repository.findOne({ firebase_uid: req.params.firebase_uid });
        res.status(200).json(member);
    } catch (e) {
        res.status(404).json({ message: "An error occurred fetching this member." });
    }
}

// GET /members
export const getAllMembers = async (_req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the member repository
    const repository = connection.getRepository(Member);

    try {
        // get all the members in the database
        const members = await repository.find();
        res.status(200).json(members);
    } catch (e) {
        res.status(404).json({ message: "An error occurred fetching all members." });
    }
}

// POST /members
export const createMember = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the member repository
    const repository = connection.getRepository(Member);

    try {
        // create a new member with the given information
        const member = repository.create(req.body);

        // save the new member
        const saveResults = await repository.save(member!);

        res.status(200).json(saveResults);
    } catch (e) {
        res.status(404).json({ message: "An error occurred creating this member." });
    }
}

// PUT /members/:firebase_uid
export const updateMember = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the member repository
    const repository = connection.getRepository(Member);

    try {
        // get the member with the uid specified
        const member = await repository.findOne({ firebase_uid: req.params.firebase_uid });

        // update the member data
        repository.merge(member!, req.body);

        // save the member with the new details
        const saveResults = await repository.save(member!);

        res.status(200).json(saveResults);
    } catch (e) {
        res.status(404).json({ message: "An error occurred updating this member." });
    }
}

// DELETE /members/:firebase_uid
export const deleteMember = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the member repository
    const repository = connection.getRepository(Member);

    try {
        // get the member with the uid specified
        const member = await repository.findOne({ firebase_uid: req.params.firebase_uid });

        // delete the member 
        const saveResults = await repository.delete(member!);

        res.status(200).json(saveResults);
    } catch (e) {
        res.status(404).json({ message: "An error occurred deleting this member." });
    }
}
