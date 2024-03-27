---
title: "Buggregator: PHP Debugging Server"
tags: [ buggregator ]
---

# {{ $frontmatter.title }}

[buggregator.dev](https://buggregator.dev/)

`compose.yaml`

```yaml
services:
    buggregator:
        image: ghcr.io/buggregator/server:latest
        ports:
            - 127.0.0.1:8000:8000
```

## Symfony

### Mailer

`config.yaml`

```yaml
framework:
    mailer:
        transports:
            main: '%env(MAILER_DSN)%'
```

`.env.local`

```txt
MAILER_DSN=smtp://buggregator:1025
```

### Dump Server

`config.yaml`

```yaml
debug:
    dump_destination: "tcp://%env(VAR_DUMPER_SERVER)%"
```

`.env.local`

```txt
VAR_DUMPER_FORMAT=server
VAR_DUMPER_SERVER=buggregator:9912
```

### Monolog

`config.yaml`

```yaml
monolog:
    handlers:
        socket:
            level: error
            type: socket
            formatter: monolog.formatter.json
            connection_string: '%env(MONOLOG_SOCKET_HOST)%'
```

`.env.local`

```txt
MONOLOG_SOCKET_HOST=buggregator:9913
```
