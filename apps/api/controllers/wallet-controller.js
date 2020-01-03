'use strict';

/**
 * Module dependencies.
 */

const walletManager = require('src/users/Wallet-manager');

/**
 * Export `WalletController`.
 */

module.exports = app => {
  // Get wallets.
  app.get('/wallets', async context => {
    const wallets = await walletManager.findAll();

    context.body = wallets;
  });

  // Get wallet by id.
  app.get('/wallets/:id', async context => {
    const [wallet] = await WalletManager.findById(context.params.id);

    context.body = wallet;
  });

  // Create wallet.
  app.post('/wallets', async context => {
    console.log('context.request.body =>', context.request.body);
    const [wallet] = await userManager.createWallet(context.request.body);

    context.body = wallet;
  });

  // Update wallet.
  app.patch('/wallets/:id', async context => {
    const [wallet] = await WalletManager.updateWallet(context.params.id, context.request.body);

    context.body = wallet;
  });

  // Delete wallet.
  app.delete('/wallets/:id', async context => {
    await WalletManager.deleteWallet(context.params.id);

    context.status = 204;
  });
};