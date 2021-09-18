import { ChildEntity } from "typeorm";
import { User } from "./User";

@ChildEntity()
export class Visitor extends User {
}
