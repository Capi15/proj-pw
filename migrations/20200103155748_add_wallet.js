'use strict';

exports.up = async knex => {
    await knex.schema.createTable("Wallet", table => {
        table.uuid("id").primary().notNullable().defaultTo(knex.raw("uuid_generate_v4()"));
        table.double("EUR").notNullable().defaultTo(20000);
        table.double("BTC").notNullable().defaultTo(0);
        table.double("ETH").notNullable().defaultTo(0);
    });
};

exports.down = function(knex) {
    throw new Error('Irreversible Migration');
};





