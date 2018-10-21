# docker-mediamachine

My dockerized NAS / Mediamachine consisting of SabNZBd, Sonarr, Radarr, Plex, Ombi as well as Telegram Bots to control the services.

## Installation

1. Make sure you've installed all requirements
2. Clone this repository:

```shell
git clone https://github.com/frdmn/docker-mediamachine
```

3. Create a copy of the sample `.env` file and adjust it at will:

```shell
cp .env.sample .env
```

4. Create symlink for media storage on the host system:

```shell
ln -sf /raid/media ./data/media
mkdir ./data/media/tv
mkdir ./data/media/movies
```

(Assuming `/raid/media` is the location where you want to keep and store your media files)

5. Spin up the containers:

```shell
docker-compose up -d
```

## Configuration

You can make use of the following environment variables / configurations:

| Environment variable | Default value | Description
|----------------------|---------------|------------|
| `SONARR_IMAGEVERSION` | `142` | Image version of Sonarr container |
| `SONARR_PORT` | `8989` | Port to bind Sonarr on the host system |
| `SONARR_PUID` | `501` | UID of Sonarr user (should be match with the host one) |
| `SONARR_PGID` | `501` | GID of Sonarr user (should be match with the host one) |
| `SONARR_TZ` | `Europe/Berlin` | Timezone within container |

| Environment variable | Default value | Description
|----------------------|---------------|------------|
| `RADARR_IMAGEVERSION` | `117` | Image version of Radarr container |
| `RADARR_PORT` | `7878` | Port to bind Radarr on the host system |
| `RADARR_PUID` | `501` | UID of Radarr user (should be match with the host one) |
| `RADARR_PGID` | `501` | GID of Radarr user (should be match with the host one) |
| `RADARR_TZ` | `Europe/Berlin` | Timezone within container |

| Environment variable | Default value | Description
|----------------------|---------------|------------|
| `SABNZBD_IMAGEVERSION` | `121` | Image version of SabNZBd container  |
| `SABNZBD_PORT` | `8080` | Port to bind SabNZBd on the host system |
| `SABNZBD_PUID` | `501` | UID of SabNZBd user (should be match with the host one) |
| `SABNZBD_PGID` | `501` | GID of SabNZBd user (should be match with the host one) |
| `SABNZBD_TZ` | `Europe/Berlin` | Timezone within container |

| Environment variable | Default value | Description
|----------------------|---------------|------------|
| `PLEX_IMAGEVERSION` | `1.13.2.5154-fd05be322` | Image version of Plex container |
| `PLEX_CLAIM` | `XXX` | Plex claim code (https://www.plex.tv/claim/) |
| `PLEX_PUID` | `501` | UID of Plex user (should be match with the host one) |
| `PLEX_PGID` | `501` | GID of Plex user (should be match with the host one) |
| `PLEX_ADVERTISE_IP` | `127.0.0.1` | Advertise IP for Plex |
| `PLEX_TZ` | `Europe/Berlin` | Timezone within container |

| Environment variable | Default value | Description
|----------------------|---------------|------------|
| `OMBI_IMAGEVERSION` | `106` | Image version of Ombi container  |
| `OMBI_PORT` | `3579` | Port to bind Ombi on the host system |
| `OMBI_PUID` | `501` | UID of Ombi user (should be match with the host one) |
| `OMBI_PGID` | `501` | GID of Ombi user (should be match with the host one) |
| `OMBI_TZ` | `Europe/Berlin` | Timezone within container |

| Environment variable | Default value | Description
|----------------------|---------------|------------|
| `RADARR_BOT_TELEGRAM_BOTTOKEN` | `123456789:HEkD9NpcxbKVxiulzPfCf9fqQoViMKEWZHl` | Telegram token |
| `RADARR_BOT_BOT_PASSWORD` | `password` | Bot control password |
| `RADARR_BOT_BOT_OWNER` | `1234567` | Telegram owner ID |
| `RADARR_BOT_BOT_NOTIFYID` | `0` | Telegram notify ID |
| `RADARR_BOT_BOT_MAXRESULTS` | `15` | Max results to list |
| `RADARR_BOT_RADARR_HOST` | `nas.host.name.com` | Radarr hostname |
| `RADARR_BOT_RADARR_APIKEY` | `fN514qlUv6g4L9n7Is23xXHiXdKi90aq` | Radarr API key |
| `RADARR_BOT_RADARR_PORT` | `7878` | Radarr port |
| `RADARR_BOT_DEFAULTS_ROOTFOLDER` | `/media/movies/` | Default folder to use when adding new movies |
| `RADARR_BOT_DEFAULTS_PROFILEID` | `4` | Default profile ID when adding new movies |

| Environment variable | Default value | Description
|----------------------|---------------|------------|
| `SONARR_BOT_TELEGRAM_BOTTOKEN` | `123456789:hXgD8033Z5lUfSnnmyJxUp71gVJ1yrLFSOG` | Telegram token |
| `SONARR_BOT_BOT_PASSWORD` | `password` | Bot control password |
| `SONARR_BOT_BOT_OWNER` | `1234567` | Telegram owner ID |
| `SONARR_BOT_BOT_NOTIFYID` | `0` | Telegram notify ID |
| `SONARR_BOT_BOT_MAXRESULTS` | `15` | Max results to list |
| `SONARR_BOT_SONARR_HOST` | `nas.host.name.com` | Sonarr hostname|
| `SONARR_BOT_SONARR_APIKEY` | `ubNIceVUT6J1qgpyrwdrvluruGm0hmaP` | Sonarr API key |
| `SONARR_BOT_SONARR_PORT` | `8989` | Sonarr port |

| Environment variable | Default value | Description
|----------------------|---------------|------------|
| `MUXIMUX_IMAGEVERSION` | `105` | Image version of Muximux container  |
| `MUXIMUX_PORT` | `80` | Port to bind Muximux on the host system |
| `MUXIMUX_PUID` | `501` | UID of Muximux user (should be match with the host one) |
| `MUXIMUX_PGID` | `501` | GID of Muximux user (should be match with the host one) |
| `MUXIMUX_TZ` | `Europe/Berlin` | Timezone within container |


## Usage

### Services

#### Start/create services

```shell
$ docker-compose up -d
Creating media_ombi_1       ... done
Creating media_plex_1       ... done
Creating media_radarr-bot_1 ... done
Creating media_radarr_1     ... done
Creating media_sabnzbd_1    ... done
Creating media_sonarr-bot_1 ... done
Creating media_sonarr_1     ... done
```

#### Stop services

```shell
$ docker-compose stop
Stopping media_ombi_1       ... done
Stopping media_plex_1       ... done
Stopping media_radarr-bot_1 ... done
Stopping media_radarr_1     ... done
Stopping media_sabnzbd_1    ... done
Stopping media_sonarr-bot_1 ... done
Stopping media_sonarr_1     ... done
```

#### Upgrade services

```shell
$ docker-compose stop
$ docker-compose pull
$ docker-compose rm
$ docker-compose up -d
```

#### Check logs

```shell
$ docker-compose logs -f
```

```shell
$ docker-compose logs -f sabnzbd
```

## Contributing

1. Fork it
2. Create your feature branch:

```shell
git checkout -b feature/my-new-feature
```

3. Commit your changes:

```shell
git commit -am 'Add some feature'
```

4. Push to the branch:

```shell
git push origin feature/my-new-feature
```

5. Submit a pull request

## Requirements / Dependencies

* Docker (incl. `docker-compose`)

## Version

1.0.0

## License

[MIT](LICENSE)
