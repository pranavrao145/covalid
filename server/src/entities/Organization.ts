import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm'

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
}
