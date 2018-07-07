var fs = require('fs-extra');
var logger = require(__dirname + '/../lib/logger');

var configFile = __dirname + '/../config.json';

var config;

try {
  logger.info('config file found %s', configFile);
  config = JSON.parse(fs.readFileSync(configFile, 'utf8'));
} catch (err) {

  // JSON file is not correct
  if (err.name === 'SyntaxError') {
    throw new Error('Invalid configuration file, please make sure the file is in JSON format.');
  }

  // config file not found
  if (err.code === 'ENOENT') {
    logger.info('config file not found');
    config          = {};
    config.telegram = {};
    config.bot      = {};
    config.sonarr   = {};
  }
}

/*
 * set up config options, they can be passed in thru the enviroment
 */
config.telegram.botToken = config.telegram.botToken || process.env.TELEGRAM_BOTTOKEN;

config.bot.password      = config.bot.password || process.env.BOT_PASSWORD || '';
config.bot.owner         = config.bot.owner || process.env.BOT_OWNER || 0;
config.bot.notifyId      = config.bot.notifyId || process.env.BOT_NOTIFYID || 0;
config.bot.maxResults    = config.bot.maxResults || process.env.BOT_MAXRESULTS || 15;
config.bot.lang          = config.bot.lang || 'en';

config.sonarr.hostname   = config.sonarr.hostname || process.env.SONARR_HOST || 'localhost';
config.sonarr.apiKey     = config.sonarr.apiKey || process.env.SONARR_APIKEY;
config.sonarr.port       = config.sonarr.port || process.env.SONARR_PORT || 8989;
config.sonarr.urlBase    = config.sonarr.urlBase || process.env.SONARR_URLBASE;
config.sonarr.ssl        = config.sonarr.ssl || process.env.SONARR_SSL || false;
config.sonarr.username   = config.sonarr.username || process.env.SONARR_USERNAME;
config.sonarr.password   = config.sonarr.password || process.env.SONARR_PASSWORD;

module.exports = config;
