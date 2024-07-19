'use strict';

/**
 * all-puppie service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::all-puppie.all-puppie');
