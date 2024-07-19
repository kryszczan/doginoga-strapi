'use strict';

/**
 * for-client service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::for-client.for-client');
