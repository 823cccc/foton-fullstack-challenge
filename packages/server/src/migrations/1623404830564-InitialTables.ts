import { MigrationInterface, QueryRunner } from 'typeorm'

export class InitialTables1623404830564 implements MigrationInterface {
  name = 'InitialTables1623404830564'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `books` (`id` varchar(36) NOT NULL, `name` varchar(120) NOT NULL, `author` varchar(120) NOT NULL, `description` text NOT NULL, `cover_url` varchar(2048) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    )
    await queryRunner.query(
      'CREATE TABLE `users` (`id` varchar(36) NOT NULL, `name` varchar(100) NOT NULL, `email` varchar(320) NOT NULL, `password` varchar(100) NOT NULL, UNIQUE INDEX `IDX_97672ac88f789774dd47f7c8be` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB',
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'DROP INDEX `IDX_97672ac88f789774dd47f7c8be` ON `users`',
    )
    await queryRunner.query('DROP TABLE `users`')
    await queryRunner.query('DROP TABLE `books`')
  }
}
