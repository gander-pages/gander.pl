---
lastUpdated: 2023-04-11T01:08:30+02:00
title: Disable Docker TLS
topic: docker
tags: [docker, tls]
---

> TLS configuration is invalid - make sure your DOCKER\_TLS\_VERIFY and DOCKER\_CERT\_PATH are set correctly

In _.bashrc_ add:

```bash
unset DOCKER_TLS_VERIFY
unset DOCKER_CERT_PATH
```
