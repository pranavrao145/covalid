import { PrimaryGeneratedColumn, Column, Entity, OneToOne, JoinColumn, ManyToOne } from 'typeorm'
import { Manager } from './Manager';
import { Member } from './Member';
import { Group } from './Group';

@Entity()
export class Log {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'timestamptz' })
    time_start!: Date;

    @Column({ type: 'timestamptz' })
    time_end!: Date;

    @Column()
    title!: string;

    @Column()
    description!: string;

    @Column({ type: 'timestamptz' })
    date_created!: Date;

    @OneToOne(() => Manager)
    @JoinColumn()
    manager!: Manager;

    @OneToOne(() => Member)
    @JoinColumn()
    member!: Member;

    @ManyToOne(() => Group, group => group.logs) group!: Group;
}
