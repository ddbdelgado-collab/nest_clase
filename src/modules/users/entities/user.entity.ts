import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { IntegerType } from "typeorm/driver/mongodb/typings.js";

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


}
