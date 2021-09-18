import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm'
import { Group } from './Group';

@Entity()
export class Organization {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    description!: string;

    @Column({ type: 'timestamptz' })
    date_created!: Date;

    @OneToMany(() => Group, group => group.organization) groups!: Group[];
}
