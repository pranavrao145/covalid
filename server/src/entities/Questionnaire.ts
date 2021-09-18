import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm' 

@Entity()
export class Questionnaire {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    isCleared!: boolean;

    @Column({ type: 'timestamptz' })
    date_created!: Date;
}
