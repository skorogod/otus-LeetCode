import { MigrationInterface, QueryRunner } from "typeorm";

export class TagsAdded1719258150843 implements MigrationInterface {
    name = 'TagsAdded1719258150843'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role_rules" DROP CONSTRAINT "FK_393cdada952f6374b57b986e03c"`);
        await queryRunner.query(`ALTER TABLE "role_rules" DROP CONSTRAINT "FK_e7d47723580483911e488ac65ba"`);
        await queryRunner.query(`ALTER TABLE "solved_tasks" DROP CONSTRAINT "FK_bf728cf427f75dd8c3550746156"`);
        await queryRunner.query(`ALTER TABLE "solved_tasks" DROP CONSTRAINT "FK_9a9995d404ed43a2d12792a0e5d"`);
        await queryRunner.query(`ALTER TABLE "role_rules" ADD CONSTRAINT "FK_e7d47723580483911e488ac65ba" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "role_rules" ADD CONSTRAINT "FK_393cdada952f6374b57b986e03c" FOREIGN KEY ("rule_id") REFERENCES "rules"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "solved_tasks" ADD CONSTRAINT "FK_9a9995d404ed43a2d12792a0e5d" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "solved_tasks" ADD CONSTRAINT "FK_bf728cf427f75dd8c3550746156" FOREIGN KEY ("task_id") REFERENCES "tasks"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "solved_tasks" DROP CONSTRAINT "FK_bf728cf427f75dd8c3550746156"`);
        await queryRunner.query(`ALTER TABLE "solved_tasks" DROP CONSTRAINT "FK_9a9995d404ed43a2d12792a0e5d"`);
        await queryRunner.query(`ALTER TABLE "role_rules" DROP CONSTRAINT "FK_393cdada952f6374b57b986e03c"`);
        await queryRunner.query(`ALTER TABLE "role_rules" DROP CONSTRAINT "FK_e7d47723580483911e488ac65ba"`);
        await queryRunner.query(`ALTER TABLE "solved_tasks" ADD CONSTRAINT "FK_9a9995d404ed43a2d12792a0e5d" FOREIGN KEY ("user_id") REFERENCES "tasks"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "solved_tasks" ADD CONSTRAINT "FK_bf728cf427f75dd8c3550746156" FOREIGN KEY ("task_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "role_rules" ADD CONSTRAINT "FK_e7d47723580483911e488ac65ba" FOREIGN KEY ("role_id") REFERENCES "rules"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "role_rules" ADD CONSTRAINT "FK_393cdada952f6374b57b986e03c" FOREIGN KEY ("rule_id") REFERENCES "roles"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
    }

}
