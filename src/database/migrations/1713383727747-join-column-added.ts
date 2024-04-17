import { MigrationInterface, QueryRunner } from "typeorm";

export class JoinColumnAdded1713383727747 implements MigrationInterface {
    name = 'JoinColumnAdded1713383727747'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "rules" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_10fef696a7d61140361b1b23608" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "roles" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "levels" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, CONSTRAINT "PK_05f8dd8f715793c64d49e3f1901" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "task_types" ("id" SERIAL NOT NULL, CONSTRAINT "PK_232576669c4df1f0a15e1300ce2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tasks" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "tags" text array NOT NULL, "links" text array NOT NULL, "level_id" integer, "user_id" integer, "task_type_id" integer, CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comments" ("id" SERIAL NOT NULL, "date" TIMESTAMP NOT NULL, "text" character varying NOT NULL, "task_id" integer, "user_id" integer, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "username" character varying NOT NULL, "role_id" integer, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "role_rules" ("rule_id" integer NOT NULL, "role_id" integer NOT NULL, CONSTRAINT "PK_cfb0c948f8a356030d6125df5e9" PRIMARY KEY ("rule_id", "role_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_393cdada952f6374b57b986e03" ON "role_rules" ("rule_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_e7d47723580483911e488ac65b" ON "role_rules" ("role_id") `);
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "FK_8c7bf11e91f04626bf2480740af" FOREIGN KEY ("level_id") REFERENCES "levels"("id") ON DELETE RESTRICT ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "FK_db55af84c226af9dce09487b61b" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "FK_ea76a982cfc3dd4bff34daaf036" FOREIGN KEY ("task_type_id") REFERENCES "task_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_18c2493067c11f44efb35ca0e03" FOREIGN KEY ("task_id") REFERENCES "tasks"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_4c675567d2a58f0b07cef09c13d" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_a2cecd1a3531c0b041e29ba46e1" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "role_rules" ADD CONSTRAINT "FK_393cdada952f6374b57b986e03c" FOREIGN KEY ("rule_id") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "role_rules" ADD CONSTRAINT "FK_e7d47723580483911e488ac65ba" FOREIGN KEY ("role_id") REFERENCES "rules"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role_rules" DROP CONSTRAINT "FK_e7d47723580483911e488ac65ba"`);
        await queryRunner.query(`ALTER TABLE "role_rules" DROP CONSTRAINT "FK_393cdada952f6374b57b986e03c"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_a2cecd1a3531c0b041e29ba46e1"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_4c675567d2a58f0b07cef09c13d"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_18c2493067c11f44efb35ca0e03"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "FK_ea76a982cfc3dd4bff34daaf036"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "FK_db55af84c226af9dce09487b61b"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "FK_8c7bf11e91f04626bf2480740af"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e7d47723580483911e488ac65b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_393cdada952f6374b57b986e03"`);
        await queryRunner.query(`DROP TABLE "role_rules"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "comments"`);
        await queryRunner.query(`DROP TABLE "tasks"`);
        await queryRunner.query(`DROP TABLE "task_types"`);
        await queryRunner.query(`DROP TABLE "levels"`);
        await queryRunner.query(`DROP TABLE "roles"`);
        await queryRunner.query(`DROP TABLE "rules"`);
    }

}
