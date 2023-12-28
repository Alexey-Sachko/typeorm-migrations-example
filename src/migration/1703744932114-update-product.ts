import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateProduct1703744932114 implements MigrationInterface {
  name = 'UpdateProduct1703744932114';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "product" ADD "description" character varying`,
    );
    await queryRunner.query(`UPDATE "product" SET "description" = ''`);
    await queryRunner.query(
      `ALTER TABLE "product" ALTER COLUMN "description" SET NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "description"`);
  }
}
