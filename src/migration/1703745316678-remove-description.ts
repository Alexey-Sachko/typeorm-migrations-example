import { MigrationInterface, QueryRunner } from 'typeorm';

export class RemoveDescription1703745316678 implements MigrationInterface {
  name = 'RemoveDescription1703745316678';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "description"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "product" ADD "description" character varying NOT NULL`,
    );
  }
}
