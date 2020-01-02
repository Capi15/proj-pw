'use strict';

module.exports = {
  database: {
    client: 'postgres',
    connection: {
      charset: 'utf8',
      database: 'CriptoMoeda',
      host: '127.0.0.1',
      port: '3000',
      user: 'postgres',
      password: '1234'
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3001
  }
};