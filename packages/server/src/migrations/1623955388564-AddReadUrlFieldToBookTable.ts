import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddReadUrlFieldToBookTable1623955388564
  implements MigrationInterface
{
  name = 'AddReadUrlFieldToBookTable1623955388564'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE `books` ADD `read_url` varchar(2048) NOT NULL DEFAULT 'https://books.google.com/?hl=pt-BR'",
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `books` DROP COLUMN `read_url`')
  }
}
