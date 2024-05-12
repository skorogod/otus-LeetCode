import { MigrationInterface, QueryRunner } from "typeorm";

export class Fixed1713384132136 implements MigrationInterface {
    name = 'Fixed1713384132136'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role_rules" DROP CONSTRAINT "FK_393cdada952f6374b57b986e03c"`);
        await queryRunner.query(`ALTER TABLE "role_rules" ADD CONSTRAINT "FK_393cdada952f6374b57b986e03c" FOREIGN KEY ("rule_id") REFERENCES "roles"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role_rules" DROP CONSTRAINT "FK_393cdada952f6374b57b986e03c"`);
        await queryRunner.query(`ALTER TABLE "role_rules" ADD CONSTRAINT "FK_393cdada952f6374b57b986e03c" FOREIGN KEY ("rule_id") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
