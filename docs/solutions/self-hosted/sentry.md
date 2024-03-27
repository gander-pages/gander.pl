---
title: "Sentry: Install, Backup and Re-Install"
tags: [ sentry, self-hosted, install, reinstall, import, export ]
outline: [ 2, 3 ]
---

# {{ $frontmatter.title }}

## Requirements

According to the official documentation, the minimum requirements for Sentry `24.x` are `2 CPU cores` / `4 GB RAM`.

My tests show that Sentry `24.x` runs on the following _Hetzner VPS_ configurations:

| Provider | Server  | CPU cores |   RAM   |  SWAP   |
|:--------:|:-------:|:---------:|:-------:|:-------:|
| Hetzner  | `CPX21` |    `3`    | `4 GB`  | `7+ GB` | 
| Hetzner  | `CX31`  |    `2`    | `8 GB`  | `3+ GB` |
| Hetzner  | `CPX41` |    `4`    | `16 GB` |         |
| Contabo  | `VPS 1` |    `4`    | `6 GB`  | `5+ GB` |

Additional requirements are `Docker Engine` and optionally `reverse proxy`.

## Before re-install

### Backup config files

+ `sentry/config.yml`
+ `sentry/sentry.conf.py`
+ `sentry/enhance-image.sh`
+ `geoip/GeoIP.conf`
+ `.env.custom`

### Backup settings

e.g. to file `sentry/backup.json` by following command:

```shell
./sentry-admin.sh export global /etc/sentry/backup.json
```

You may not have permission to create this file, then you can create it yourself and grant write permissions.

#### [Docs: Backup & Restore](https://develop.sentry.dev/self-hosted/backup/)

## Before install

Follow the [official installation documentation](https://develop.sentry.dev/self-hosted/),
but before running `install.sh` make sure you have the following files in the correct places:

### Important config files

+ `sentry/config.yml` configured from `sentry/config.example.yml`.
+ `sentry/sentry.conf.py` configured from `sentry/sentry.conf.example.py`.

### When restoring settings

+ `sentry/backup.json` if you want to restore the _Sentry Configuration_ from backup.

### Additional config files

+ `sentry/enhance-image.sh` configured from `sentry/enhance-image.example.sh`.
+ `geoip/GeoIP.conf` configured from [documentation](https://develop.sentry.dev/self-hosted/geolocation/).

## After install

If you want to restore the _Sentry Configuration_, answer the following question with `n` and follow the steps below:

```
Would you like to create a user account now? [Y/n]: n
``` 

```shell
./sentry-admin.sh import global /etc/sentry/backup.json
```

```
Proceeding with this operation will irrecoverably delete all existing
low-volume data - are you sure want to continue? [y/n]: y
```

## Starting up

```shell
docker compose up -d
```

## Side Notes

::: details `--no-report-self-hosted-issues`
Set env variable in file `/etc/environment`:
```txt
REPORT_SELF_HOSTED_ISSUES=0
```
To avoid reporting error and performance data for your Sentry instance.
:::
