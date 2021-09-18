import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, ManyToMany, JoinTable } from 'typeorm'
import { Organization } from './Organization';
import { Member } from './Member';
import { Manager } from './Manager';

@Entity()
export class Group {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    description!: string;

    @Column({ type: 'timestamptz' })
    date_created!: Date;

    @ManyToOne(() => Organization, organization => organization.groups) organization!: Organization;

    @ManyToMany(() => Member, member => member.groups)
    @JoinTable()
    members!: Group[];

    @ManyToMany(() => Manager, manager => manager.groups)
    @JoinTable()
    managers!: Group[];
}
