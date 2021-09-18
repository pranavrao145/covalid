import { ChildEntity, ManyToMany } from "typeorm";
import { Group } from "./Group";
import { User } from "./User";

@ChildEntity()
export class Manager extends User {
    @ManyToMany(() => Group, group => group.managers)
    groups!: Group[];
}
