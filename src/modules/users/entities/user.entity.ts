import { Persona } from "../../persona/entities/persona.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string

    @Column()
    password!: string

    @Column()
    direction?: string

    @Column()
    number?: string

    @OneToOne(()=>Persona, persona=>persona.user,{cascade: true})
    persona!: Persona;
}
