import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, OneToMany } from 'typeorm'
import { Log } from './Log';
import { Organization } from './Organization';

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
    @OneToMany(() => Log, log => log.group) logs!: Log[];
}
