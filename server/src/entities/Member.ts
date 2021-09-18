import { ChildEntity } from "typeorm";
import { User } from "./User";

@ChildEntity()
export class Member extends User {
}
