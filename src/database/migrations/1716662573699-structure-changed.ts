import { MigrationInterface, QueryRunner } from "typeorm";

export class StructureChanged1716662573699 implements MigrationInterface {
    name = 'StructureChanged1716662573699'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "solved_tasks" ("task_id" integer NOT NULL, "user_id" integer NOT NULL, CONSTRAINT "PK_bc8d945c553440acfee63a0841a" PRIMARY KEY ("task_id", "user_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_bf728cf427f75dd8c355074615" ON "solved_tasks" ("task_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_9a9995d404ed43a2d12792a0e5" ON "solved_tasks" ("user_id") `);
        await queryRunner.query(`ALTER TABLE "users" ADD "image" character varying`);
        await queryRunner.query(`ALTER TABLE "users" ADD "views" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "users" ADD "reputation" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "users" ADD "discuss" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "solved_tasks" ADD CONSTRAINT "FK_bf728cf427f75dd8c3550746156" FOREIGN KEY ("task_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "solved_tasks" ADD CONSTRAINT "FK_9a9995d404ed43a2d12792a0e5d" FOREIGN KEY ("user_id") REFERENCES "tasks"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "solved_tasks" DROP CONSTRAINT "FK_9a9995d404ed43a2d12792a0e5d"`);
        await queryRunner.query(`ALTER TABLE "solved_tasks" DROP CONSTRAINT "FK_bf728cf427f75dd8c3550746156"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "discuss"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "reputation"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "views"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "image"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9a9995d404ed43a2d12792a0e5"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bf728cf427f75dd8c355074615"`);
        await queryRunner.query(`DROP TABLE "solved_tasks"`);
    }

}
