/* global __dirname, process */

'use strict';
var fs = require("fs");
var i18n   = require(__dirname + '/lib/lang');    
var logger = require(__dirname + '/lib/logger');
var config = require(__dirname + '/lib/config');
var TelegramBot = require('node-telegram-bot-api');

var bot = new TelegramBot(config.telegram.botToken, { polling: false });

var groupId = config.bot.notifyId;

var series_id = process.env.sonarr_series_id || i18n.__("botNotifySerieUnknowId");
var series_title   = process.env.sonarr_series_title || i18n.__("botNotifySerieUnknowTitle");
var series_path = process.env.sonarr_series_path || i18n.__("botNotifySerieUnknowPath");
var series_tvdbid = process.env.sonarr_series_tvdbid || i18n.__("botNotifySerieUnknowTvdbId");
var episodefile_id = process.env.sonarr_episodefile_id || i18n.__("botNotifyEpisodeUnknowFileId");
var episodefile_relativepath = process.env.sonarr_episodefile_relativepath || i18n.__("botNotifyEpisodeUnknowRelativePath");
var target  = process.env.sonarr_episodefile_path || i18n.__("botNotifyEpisodeUnknowPath");
var season  = process.env.sonarr_episodefile_seasonnumber || i18n.__("botNotifyEpisodeUnknowSeason");
var episode = process.env.sonarr_episodefile_episodenumbers || i18n.__("botNotifyEpisodeUnknowEpisode");
var airdate = process.env.sonarr_episodefile_episodeairdates || i18n.__("botNotifyEpisodeUnknowAirDates");
var airdateutc = process.env.sonarr_episodefile_episodeairdatesutc || i18n.__("botNotifyEpisodeUnknowUtcAirDates");
var quality = process.env.sonarr_episodefile_quality || i18n.__("botNotifyEpisodeUnknowQuality");
var qualityversion = process.env.sonarr_episodefile_quality_version || i18n.__("botNotifyEpisodeUnknowQualityVersion");
var releasegroup = process.env.sonarr_episodefile_releasegroup || i18n.__("botNotifyEpisodeUnknowReleaseGroup");
var source  = process.env.sonarr_episodefile_scenename || i18n.__("botNotifyEpisodeUnknowName");
var sourcepath = process.env.sonarr_episodefile_sourcepath || i18n.__("botNotifyEpisodeUnknowSourcePath");
var sourcefolder = process.env.sonarr_episodefile_sourcefolder || i18n.__("botNotifyEpisodeUnknowSourceFolder");


var fileSizeInMegaBytes = 0;
try {
  var stats = fs.statSync(target)
  fileSizeInMegaBytes = Math.round((stats['size'] / 1048576) * 10) / 10;
}
catch (e) {
  logger.error("err:" + e);
}
var message = [];
message.push(i18n.__("botNotifyEpisodeImported"));
message.push(i18n.__("botNotifyEpisodeFormat", series_title, season, episode));
message.push(i18n.__("botNotifyAirDate", airdate));
message.push(i18n.__("botNotifyQuality", quality));
message.push(i18n.__("botNotifySize", fileSizeInMegaBytes));

//message.push(i18n.__("botNotifySeriesID", series_id));
//message.push(i18n.__("botNotifyPath", series_path));
//message.push(i18n.__("botNotifyTvdbId", series_tvdbid));
//message.push(i18n.__("botNotifyEpisodeId", episodefile_id));
//message.push(i18n.__("botNotifyRelPath", episodefile_relativepath));
//message.push(i18n.__("botNotifyAirDateUtc", airdateutc));
//message.push(i18n.__("botNotifyQualityVersion", qualityversion));
//message.push(i18n.__("botNotifyReleaseGroup", releasegroup));
//message.push(i18n.__("botNotifySource", source));
//message.push(i18n.__("botNotifySourcePath", sourcepath));
//message.push(i18n.__("botNotifySource", sourcefolder));
//message.push(i18n.__("botNotifyDestination", target));

bot.sendMessage(groupId, message.join('\n'), {
  'disable_web_page_preview': true,
  'parse_mode': 'Markdown',
  'selective': 2
});
