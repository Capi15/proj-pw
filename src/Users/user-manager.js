'use strict';

/**
 * Module dependencies.
 */

const knex = require('src/clients/knex');

/**
 * `UserManager`.
 */

class UserManager {
  /**
   * Find all.
   */

  async findAll () {
    const users = await knex('Users').select('*');

    return users;
  }

  /**
   * Find by id.
   */

  async findById (id) {
    const user = await knex('Users')
      .select('*')
      .where({ id });

    return user;
  }

  /**
   * Create user.
   */

  async createUser (data) {
    const user = await knex('Users')
      .insert(data)
      .returning('*');

    return user;
  }

  /**
   * Update user.
   */

  async updateUser (id, data) {
    const user = await knex('Users')
      .update(data)
      .where({ id })
      .returning('*');

    return user;
  }

  /**
   * Delete user.
   */

  async deleteUser (id) {
    await knex('Users')
      .delete()
      .where({ id });
  }
}

/**
 * Export `UserManager`.
 */

module.exports = new UserManager();