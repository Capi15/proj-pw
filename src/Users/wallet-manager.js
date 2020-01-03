'use strict';

/**
 * Module dependencies.
 */

const knex = require('src/clients/knex');

/**
 * `walletManager`.
 */

class WalletManager {
  /**
   * Find all.
   */

  async findAll () {
    const wallets = await knex('Wallet').select('*');

    return wallets;
  }

  /**
   * Find by id.
   */

  async findById (id) {
    const wallet = await knex('Wallet')
      .select('*')
      .where({ id });

    return wallet;
  }

  /**
   * Create wallet.
   */

  async createUser (data) {
    const wallet = await knex('Wallet')
      .insert(data)
      .returning('*');

    return wallet;
  }

  /**
   * Update Wallet.
   */

  async updateWallet (id, data) {
    const wallet = await knex('Wallet')
      .update(data)
      .where({ id })
      .returning('*');

    return wallet;
  }

  /**
   * Delete wallet.
   */

  async deleteWallet (id) {
    await knex('Wallet')
      .delete()
      .where({ id });
  }
}

/**
 * Export `WalletManager`.
 */

module.exports = new WalletManager();