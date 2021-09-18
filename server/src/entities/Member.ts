import { ChildEntity, ManyToMany } from "typeorm";
import { Group } from "./Group";
import { User } from "./User";

@ChildEntity()
export class Member extends User {
    @ManyToMany(() => Group, group => group.members)
    groups!: Group[];
}
