import { MigrationInterface, QueryRunner } from "typeorm";

export class ModificancoTablaUser1782404442795 implements MigrationInterface {
    name = 'ModificancoTablaUser1782404442795'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "mail"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "direction" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "number" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "direction"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "mail" character varying NOT NULL`);
    }

}
