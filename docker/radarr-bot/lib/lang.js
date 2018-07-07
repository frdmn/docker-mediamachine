/* global __dirname */

var i18n = require('i18n');

/*
 * set up multilingual support
 */
i18n.configure({
    locales: ['en', 'fr'],
    directory: __dirname + '/../locales'
});

module.exports = i18n;
