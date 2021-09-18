import { ChildEntity, JoinTable, ManyToMany } from "typeorm";
import { Group } from "./Group";
import { User } from "./User";

@ChildEntity()
export class Manager extends User {
    @ManyToMany(() => Group)
    @JoinTable()
    groups!: Group[];
}
