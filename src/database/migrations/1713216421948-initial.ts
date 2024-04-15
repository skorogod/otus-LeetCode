import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1713216421948 implements MigrationInterface {
    name = 'Initial1713216421948'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "roles" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "levels" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, CONSTRAINT "PK_05f8dd8f715793c64d49e3f1901" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "task_types" ("id" SERIAL NOT NULL, CONSTRAINT "PK_232576669c4df1f0a15e1300ce2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tasks" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "tags" text array NOT NULL, "links" text array NOT NULL, "levelId" integer, "userId" integer, "taskTypeId" integer, CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comments" ("id" SERIAL NOT NULL, "date" TIMESTAMP NOT NULL, "text" character varying NOT NULL, "taskId" integer, "userId" integer, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "username" character varying NOT NULL, "roleId" integer, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "rules" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_10fef696a7d61140361b1b23608" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "roles_rules_roles" ("rolesId_1" integer NOT NULL, "rolesId_2" integer NOT NULL, CONSTRAINT "PK_b900559e4b59c3b3d333219a794" PRIMARY KEY ("rolesId_1", "rolesId_2"))`);
        await queryRunner.query(`CREATE INDEX "IDX_778636b772385c67569f3abf82" ON "roles_rules_roles" ("rolesId_1") `);
        await queryRunner.query(`CREATE INDEX "IDX_edb49e75e173b0a0a274b96827" ON "roles_rules_roles" ("rolesId_2") `);
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "FK_cc921a9200b925f2ca3a9bb6741" FOREIGN KEY ("levelId") REFERENCES "levels"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "FK_166bd96559cb38595d392f75a35" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "FK_87fc96ddd3cf917315d4c69bdc3" FOREIGN KEY ("taskTypeId") REFERENCES "task_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_9adf2d3106c6dc87d6262ccadfe" FOREIGN KEY ("taskId") REFERENCES "tasks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_368e146b785b574f42ae9e53d5e" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "roles_rules_roles" ADD CONSTRAINT "FK_778636b772385c67569f3abf82b" FOREIGN KEY ("rolesId_1") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "roles_rules_roles" ADD CONSTRAINT "FK_edb49e75e173b0a0a274b968275" FOREIGN KEY ("rolesId_2") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "roles_rules_roles" DROP CONSTRAINT "FK_edb49e75e173b0a0a274b968275"`);
        await queryRunner.query(`ALTER TABLE "roles_rules_roles" DROP CONSTRAINT "FK_778636b772385c67569f3abf82b"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_368e146b785b574f42ae9e53d5e"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_9adf2d3106c6dc87d6262ccadfe"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "FK_87fc96ddd3cf917315d4c69bdc3"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "FK_166bd96559cb38595d392f75a35"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "FK_cc921a9200b925f2ca3a9bb6741"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_edb49e75e173b0a0a274b96827"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_778636b772385c67569f3abf82"`);
        await queryRunner.query(`DROP TABLE "roles_rules_roles"`);
        await queryRunner.query(`DROP TABLE "rules"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "comments"`);
        await queryRunner.query(`DROP TABLE "tasks"`);
        await queryRunner.query(`DROP TABLE "task_types"`);
        await queryRunner.query(`DROP TABLE "levels"`);
        await queryRunner.query(`DROP TABLE "roles"`);
    }

}
