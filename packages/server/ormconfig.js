const production = process.env['NODE_ENV'] == 'production'

module.exports = {
  type: 'mariadb',
  url: process.env['JAWSDB_MARIA_URL'],
  entities: production ? ['dist/models/**/*.js'] : ['src/models/**/*.ts'],
  migrations: production
    ? ['dist/migrations/**/*.js']
    : ['src/migrations/**/*.ts'],
  migrationsTableName: 'migrations',
  migrationsRun: true,
  cli: {
    entitiesDir: production ? 'dist/models' : 'src/models',
    migrationsDir: production ? 'dist/migrations' : 'src/migrations',
  },
  logging: ['error', 'warn', 'info', 'schema'],
}
