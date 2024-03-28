import { MigrationInterface, QueryRunner } from "typeorm";

export class AddBookings1711620646878 implements MigrationInterface {
    name = "AddBookings1711620646878";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE \`booking\` (\`id\` varchar(36) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`createdBy\` varchar(255) NULL, \`updatedAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedBy\` varchar(255) NULL, \`deletedAt\` timestamp(6) NULL, \`deletedBy\` varchar(255) NULL, \`botId\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`location\` varchar(255) NOT NULL, \`vehicleType\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`booking\``);
    }
}
