import { ChildEntity, JoinTable, ManyToMany } from "typeorm";
import { User } from "./User";
import { Organization } from "./Organization";

@ChildEntity()
export class Administrator extends User {
    @ManyToMany(() => Organization, organization => organization.administrators)
    @JoinTable()
    organizations!: Organization[];
}
