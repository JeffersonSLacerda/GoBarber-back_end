import { MigrationInterface, QueryRunner } from 'typeorm';

export default class AddUpdatedAndCreatedAt1606238505075
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE  appointments ADD created_at timestamp DEFAULT now()',
    );
    await queryRunner.query(
      'ALTER TABLE  appointments ADD updated_at timestamp DEFAULT now()',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABEL appointments DROP COLUMN created_at');
    await queryRunner.query('ALTER TABEL appointments DROP COLUMN updated_at');
  }
}
