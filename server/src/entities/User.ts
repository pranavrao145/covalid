import { PrimaryGeneratedColumn, Column, Entity, TableInheritance, OneToMany } from 'typeorm'
import { Questionnaire } from './Questionnaire';

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export abstract class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    firebase_uid!: string;

    @Column()
    last_name!: string;

    @Column()
    first_name!: string;

    @Column({ type: 'timestamptz' })
    date_created!: Date;

    @OneToMany(() => Questionnaire, questionnaire => questionnaire.user) questionnaires!: Questionnaire[];
}
