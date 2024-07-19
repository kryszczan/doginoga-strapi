'use strict';

/**
 * for-client router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::for-client.for-client');
