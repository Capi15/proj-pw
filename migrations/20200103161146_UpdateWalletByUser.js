'use strict';

exports.up = async knex => {
    await knex.schema.alterTable("Wallet", table => {
        table.uuid("userId").notNullable();
        table.foreign("userId").references("id").inTable("Users").onDelete("CASCADE").onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
    throw new Error('Irreversible Migration');
};
