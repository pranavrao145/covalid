import { Request, Response } from "express";
import { createConnection } from "typeorm";
import { Questionnaire } from "../entities/Questionnaire";

// GET /questionnaires/:id
export const getQuestionnaire = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the questionnaire repository
    const repository = connection.getRepository(Questionnaire);

    try {
        // get the questionnaire with the uid specified
        const questionnaire = await repository.findOne(req.params.id);
        res.status(200).json(questionnaire);
    } catch (e) {
        res.status(404).json({ message: "An error occurred fetching this questionnaire." });
    }
}

// GET /questionnaires
export const getAllQuestionnaires = async (_req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the questionnaire repository
    const repository = connection.getRepository(Questionnaire);

    try {
        // get all the questionnaires in the database
        const questionnaires = await repository.find();
        res.status(200).json(questionnaires);
    } catch (e) {
        res.status(404).json({ message: "An error occurred fetching all questionnaires." });
    }
}

// POST /questionnaires
export const createQuestionnaire = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the questionnaire repository
    const repository = connection.getRepository(Questionnaire);

    try {
        // create a new questionnaire with the given information
        const questionnaire = repository.create(req.body);

        // save the new questionnaire
        const saveResults = await repository.save(questionnaire!);

        res.status(200).json(saveResults);
    } catch (e) {
        res.status(404).json({ message: "An error occurred creating this questionnaire." });
    }
}

// PUT /questionnaires/:id
export const updateQuestionnaire = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the questionnaire repository
    const repository = connection.getRepository(Questionnaire);

    try {
        // get the questionnaire with the uid specified
        const questionnaire = await repository.findOne(req.params.id);

        // update the questionnaire data
        repository.merge(questionnaire!, req.body);

        // save the questionnaire with the new details
        const saveResults = await repository.save(questionnaire!);

        res.status(200).json(saveResults);
    } catch (e) {
        res.status(404).json({ message: "An error occurred updating this questionnaire." });
    }
}

// DELETE /questionnaires/:id
export const deleteQuestionnaire = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the questionnaire repository
    const repository = connection.getRepository(Questionnaire);

    try {
        // get the questionnaire with the uid specified
        const questionnaire = await repository.findOne(req.params.id);
 
        // delete the questionnaire 
        const saveResults = await repository.delete(questionnaire!);

        res.status(200).json(saveResults);
    } catch (e) {
        res.status(404).json({ message: "An error occurred deleting this questionnaire." });
    }
}
