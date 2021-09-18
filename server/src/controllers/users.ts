import { Request, Response } from "express";
import { createConnection } from "typeorm";
import { User } from "../entities/User";

// GET /users/:firebase_uid
export const getUser = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the user repository
    const repository = connection.getRepository(User);

    try {
        // get the user with the uid specified
        const user = await repository.findOne({ firebase_uid: req.params.firebase_uid });
        res.status(200).json(user);
    } catch (e) {
        res.status(404).json({ message: "An error occurred fetching this user." });
    }
}

// GET /users
export const getAllUsers = async (_req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the user repository
    const repository = connection.getRepository(User);

    try {
        // get all the users in the database
        const users = await repository.find();
        res.status(200).json(users);
    } catch (e) {
        res.status(404).json({ message: "An error occurred fetching all users." });
    }
}

// PUT /users/:firebase_uid
export const updateUser = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the user repository
    const repository = connection.getRepository(User);

    try {
        // get the user with the uid specified
        const user = await repository.findOne({ firebase_uid: req.params.firebase_uid });

        // update the user data
        repository.merge(user!, req.body);

        // save the user with the new details
        const saveResults = await repository.save(user!);

        res.status(200).json(saveResults);
    } catch (e) {
        res.status(404).json({ message: "An error occurred updating this user." });
    }
}

// DELETE /users/:firebase_uid
export const deleteUser = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the user repository
    const repository = connection.getRepository(User);

    try {
        // get the user with the uid specified
        const user = await repository.findOne({ firebase_uid: req.params.firebase_uid });

        // delete the user 
        const saveResults = await repository.delete(user!);

        res.status(200).json(saveResults);
    } catch (e) {
        res.status(404).json({ message: "An error occurred deleting this user." });
    }
}
