---
title: Docker
tags: [docker]
---
# {{ $frontmatter.title }}

## Persistent volume on Windows 10 Pro


```yaml
volumes:
    db: ~
services:
    volumes: db:/var/data
```

## Docker with php built-in server


Run `php -S 0.0.0.0:8080`

_Source: [https://stackoverflow.com/a/25596185](https://stackoverflow.com/a/25596185)_
