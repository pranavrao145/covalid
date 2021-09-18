import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm'
import { User } from './User';

@Entity()
export class Questionnaire {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    vaccinated_or_had_covid!: boolean;

    @Column()
    recently_travelled!: boolean;

    @Column()
    doctor_told_to_quarantine!: boolean;

    @Column()
    has_symptoms!: boolean;

    @Column()
    is_cleared!: boolean;

    @Column()
    tested_positive!: boolean;

    @Column({ type: 'timestamptz' })
    date_created!: Date;

    @ManyToOne(() => User, user => user.questionnaires) user!: User;
}
