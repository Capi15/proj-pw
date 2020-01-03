'use strict';

/**
 * Module dependencies.
 */

const Router = require('koa-router');

// Routers.
const root = new Router();

// Controllers.
require('apps/api/controllers/user-controller')(root);
require('apps/api/controllers/wallet-controller')(root);

/**
 * Export `routers`.
 */

module.exports = { root };
