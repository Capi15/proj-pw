'use strict';


exports.up = async knex => {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  await knex.schema
    .createTable('Users', table => {
      table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()')).notNullable();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('password').notNullable();
    });
};

exports.down = function(knex) {
    throw new Error('Irreversible Migration');
};
