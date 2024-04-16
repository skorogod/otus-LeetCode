import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1713302764758 implements MigrationInterface {
    name = 'Initial1713302764758'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "rules" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_10fef696a7d61140361b1b23608" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "roles" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "levels" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, CONSTRAINT "PK_05f8dd8f715793c64d49e3f1901" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "task_types" ("id" SERIAL NOT NULL, CONSTRAINT "PK_232576669c4df1f0a15e1300ce2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tasks" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "tags" text array NOT NULL, "links" text array NOT NULL, "levelId" integer, "userId" integer, "taskTypeId" integer, CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comments" ("id" SERIAL NOT NULL, "date" TIMESTAMP NOT NULL, "text" character varying NOT NULL, "taskId" integer, "userId" integer, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "username" character varying NOT NULL, "roleId" integer, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "roles_rules_rules" ("rolesId" integer NOT NULL, "rulesId" integer NOT NULL, CONSTRAINT "PK_875f3ab978f1fffc3ace64048d0" PRIMARY KEY ("rolesId", "rulesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_289b7999e3391fdc9da2c9ba8f" ON "roles_rules_rules" ("rolesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_9759e642f567b1b8080ef868ef" ON "roles_rules_rules" ("rulesId") `);
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "FK_cc921a9200b925f2ca3a9bb6741" FOREIGN KEY ("levelId") REFERENCES "levels"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "FK_166bd96559cb38595d392f75a35" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "FK_87fc96ddd3cf917315d4c69bdc3" FOREIGN KEY ("taskTypeId") REFERENCES "task_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_9adf2d3106c6dc87d6262ccadfe" FOREIGN KEY ("taskId") REFERENCES "tasks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_368e146b785b574f42ae9e53d5e" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "roles_rules_rules" ADD CONSTRAINT "FK_289b7999e3391fdc9da2c9ba8f4" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "roles_rules_rules" ADD CONSTRAINT "FK_9759e642f567b1b8080ef868ef4" FOREIGN KEY ("rulesId") REFERENCES "rules"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "roles_rules_rules" DROP CONSTRAINT "FK_9759e642f567b1b8080ef868ef4"`);
        await queryRunner.query(`ALTER TABLE "roles_rules_rules" DROP CONSTRAINT "FK_289b7999e3391fdc9da2c9ba8f4"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_368e146b785b574f42ae9e53d5e"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_9adf2d3106c6dc87d6262ccadfe"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "FK_87fc96ddd3cf917315d4c69bdc3"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "FK_166bd96559cb38595d392f75a35"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "FK_cc921a9200b925f2ca3a9bb6741"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9759e642f567b1b8080ef868ef"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_289b7999e3391fdc9da2c9ba8f"`);
        await queryRunner.query(`DROP TABLE "roles_rules_rules"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "comments"`);
        await queryRunner.query(`DROP TABLE "tasks"`);
        await queryRunner.query(`DROP TABLE "task_types"`);
        await queryRunner.query(`DROP TABLE "levels"`);
        await queryRunner.query(`DROP TABLE "roles"`);
        await queryRunner.query(`DROP TABLE "rules"`);
    }

}
