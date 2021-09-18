import { Request, Response } from "express";
import { createConnection } from "typeorm";
import { Group } from "../entities/Group";
import { Manager } from "../entities/Manager";
import { Member } from "../entities/Member";

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

// POST /group/:id/add_member/:firebase_uid
export const addMemberToGroup = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the group repository
    const groupRepository = connection.getRepository(Group);

    // access the member repository
    const memberRepository = connection.getRepository(Member);

    let group: any;

    try {
        // get the group with the id specified
        group = await groupRepository.findOne(req.params.id);
    } catch (e) {
        res.status(404).json({ message: "An error occurred adding the member to the group." });
    }

    let member: any;

    try {
        // get the member with the uid specified
        member = await memberRepository.findOne({ firebase_uid: req.params.firebase_uid });
    } catch (e) {
        res.status(404).json({ message: "An error occurred adding the member to the group." });
    }

    // add the member to the group
    group!.members.push(member!);

    // add the group to the member
    member!.groups.push(group!);

    try {
        // save the member and the group
        await groupRepository.save(group!);
        await memberRepository.save(member!);

        res.status(200).json({ message: "Success!" });
    } catch (e) {
        res.status(404).json({ message: "An error occurred adding the member to the group." });
    }
}

// POST /group/:id/remove_member/:firebase_uid
export const removeMemberFromGroup = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the group repository
    const groupRepository = connection.getRepository(Group);

    // access the member repository
    const memberRepository = connection.getRepository(Member);

    let group: any;

    try {
        // get the group with the id specified
        group = await groupRepository.findOne(req.params.id);
    } catch (e) {
        res.status(404).json({ message: "An error occurred removing the member from the group." });
    }

    let member: any;

    try {
        // get the member with the uid specified
        member = await memberRepository.findOne({ firebase_uid: req.params.firebase_uid });
    } catch (e) {
        res.status(404).json({ message: "An error occurred removing the member from the group." });
    }

    // remove the member from the group
    group!.members.forEach((item: any, index: any) => {
        if (item === member) group!.members.splice(index, 1);
    });

    // remove the group from the member
    member!.groups.forEach((item: any, index: any) => {
        if (item === group) member!.groups.splice(index, 1);
    });

    try {
        // save the member and the group
        await groupRepository.save(group!);
        await memberRepository.save(member!);

        res.status(200).json({ message: "Success!" });
    } catch (e) {
        res.status(404).json({ message: "An error occurred removing the member from the group." });
    }
}

// POST /group/:id/add_manager/:firebase_uid
export const addManagerToGroup = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the group repository
    const groupRepository = connection.getRepository(Group);

    // access the manager repository
    const managerRepository = connection.getRepository(Manager);

    let group: any;

    try {
        // get the group with the id specified
        group = await groupRepository.findOne(req.params.id);
    } catch (e) {
        res.status(404).json({ message: "An error occurred adding the manager to the group." });
    }

    let manager: any;

    try {
        // get the manager with the uid specified
        manager = await managerRepository.findOne({ firebase_uid: req.params.firebase_uid });
    } catch (e) {
        res.status(404).json({ message: "An error occurred adding the manager to the group." });
    }

    // add the manager to the group
    group!.managers.push(manager!);

    // add the group to the manager
    manager!.groups.push(group!);

    try {
        // save the manager and the group
        await groupRepository.save(group!);
        await managerRepository.save(manager!);

        res.status(200).json({ message: "Success!" });
    } catch (e) {
        res.status(404).json({ message: "An error occurred adding the manager to the group." });
    }
}

// POST /group/:id/remove_manager/:firebase_uid
export const removeManagerFromGroup = async (req: Request, res: Response) => {
    // get a connection to the database
    const connection = await createConnection();

    // access the group repository
    const groupRepository = connection.getRepository(Group);

    // access the manager repository
    const managerRepository = connection.getRepository(Manager);

    let group: any;

    try {
        // get the group with the id specified
        group = await groupRepository.findOne(req.params.id);
    } catch (e) {
        res.status(404).json({ message: "An error occurred removing the manager from the group." });
    }

    let manager: any;

    try {
        // get the manager with the uid specified
        manager = await managerRepository.findOne({ firebase_uid: req.params.firebase_uid });
    } catch (e) {
        res.status(404).json({ message: "An error occurred removing the manager from the group." });
    }

    // remove the manager from the group
    group!.managers.forEach((item: any, index: any) => {
        if (item === manager) group!.managers.splice(index, 1);
    });

    // remove the group from the manager
    manager!.groups.forEach((item: any, index: any) => {
        if (item === group) manager!.groups.splice(index, 1);
    });

    try {
        // save the manager and the group
        await groupRepository.save(group!);
        await managerRepository.save(manager!);

        res.status(200).json({ message: "Success!" });
    } catch (e) {
        res.status(404).json({ message: "An error occurred removing the manager from the group." });
    }
}
