## Changelog

### v0.3.0
- Added series type and season folder options when adding a series
- Minor code refactoring
- Updated package version

### v0.2.2
- Added `/help` command
- Added `/library` command to search Sonarr library
- Revised `/start` command
- Search for exisiting TV series before continuing
- Create `acl.json` if it doesn't exist
- More housekeeping

### v0.2.1
- Added `/wanted` command to search all wanted/missing episodes
- Added `/upcoming` command to check for upcoming episodes (a basic calendar basically)
- New NPM modules `moment`, `i18n`, and `winston` (please run npm install if upgrading)
- Limit series return from `/query`
- Lots of refactoring and bug fixes

### v0.2.0
- Added `/revoke` and `/unrevoke` commands for admin
- Fixed a few Docker issues.

### v0.1.9
- Fixed issue with keyboard not clearing when issuing `/clear` command
- Create ACL file when it doesn't exist, you will be told to restart the bot if it doesn't exist
- renamed function saveACL to updateACL
- created createACL function
- Added more logging
- More linter fixes
- More housekeeping

### v0.1.8
- Added basic auth to the bot, thanks @jayrox
- Added basic logging (please rerun `npm install`)
- More housekeeping

### v0.1.7
- Added custom keyboard, thanks @jayrox

### v0.1.6
- `/q` now responds with link to series on thetvdb.com

### v0.1.5
- Added command `/clear` to wipe all previous commands chain
- More housekeeping

### v0.1.4
- Sonarr lib is now on npm (you will need to run npm install if you are upgrading)
- Updated a few dev things

### v0.1.3
- Initial monitoring support, please report bugs if found...

### v0.1.2
- Added Docker support

### v0.1.1
- Added RSS Sync command `/rss`
- Added Refresh All Series command `/refresh`

### v0.1.0
- Initial release
