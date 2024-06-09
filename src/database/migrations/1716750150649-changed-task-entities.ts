import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangedTaskEntities1716750150649 implements MigrationInterface {
    name = 'ChangedTaskEntities1716750150649'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" ALTER COLUMN "tags" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" ALTER COLUMN "tags" SET NOT NULL`);
    }

}
