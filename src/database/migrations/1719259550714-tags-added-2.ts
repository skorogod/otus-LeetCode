import { MigrationInterface, QueryRunner } from "typeorm";

export class TagsAdded21719259550714 implements MigrationInterface {
    name = 'TagsAdded21719259550714'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tags" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tasks_tags" ("tag_id" integer NOT NULL, "task_id" integer NOT NULL, CONSTRAINT "PK_22555e9d5dfc37851895f0baffb" PRIMARY KEY ("tag_id", "task_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_3d4e7b193cd9472ca9f5f6aa87" ON "tasks_tags" ("tag_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_59df4724a06cda41af87120b0a" ON "tasks_tags" ("task_id") `);
        await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "tags"`);
        await queryRunner.query(`ALTER TABLE "tasks_tags" ADD CONSTRAINT "FK_3d4e7b193cd9472ca9f5f6aa87f" FOREIGN KEY ("tag_id") REFERENCES "tags"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "tasks_tags" ADD CONSTRAINT "FK_59df4724a06cda41af87120b0ab" FOREIGN KEY ("task_id") REFERENCES "tasks"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks_tags" DROP CONSTRAINT "FK_59df4724a06cda41af87120b0ab"`);
        await queryRunner.query(`ALTER TABLE "tasks_tags" DROP CONSTRAINT "FK_3d4e7b193cd9472ca9f5f6aa87f"`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD "tags" text array`);
        await queryRunner.query(`DROP INDEX "public"."IDX_59df4724a06cda41af87120b0a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3d4e7b193cd9472ca9f5f6aa87"`);
        await queryRunner.query(`DROP TABLE "tasks_tags"`);
        await queryRunner.query(`DROP TABLE "tags"`);
    }

}
