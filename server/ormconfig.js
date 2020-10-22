// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
  module.exports = {
    name: 'default',
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    dropSchema: false,
    logging: true,
    entities: ['dist/**/*.entity.js']
  };
