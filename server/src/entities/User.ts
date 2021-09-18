import { PrimaryGeneratedColumn, Column, Entity, TableInheritance } from 'typeorm'

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export abstract class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    firebase_uid!: string;

    @Column()
    lastName!: string;

    @Column()
    firstName!: string;

    @Column({ type: 'timestamptz' })
    date_created!: Date;
}
