import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm'

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
}
