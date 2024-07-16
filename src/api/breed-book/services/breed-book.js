'use strict';

/**
 * breed-book service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::breed-book.breed-book');
