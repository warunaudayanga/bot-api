import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateBookings1711689485787 implements MigrationInterface {
    name = "UpdateBookings1711689485787";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE UNIQUE INDEX \`IDX_83184c525ceeb2446782985856\` ON \`booking\` (\`botId\`, \`phone\`)`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_83184c525ceeb2446782985856\` ON \`booking\``);
    }
}
