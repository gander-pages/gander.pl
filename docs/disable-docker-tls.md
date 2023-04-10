---
title: Disable Docker TLS
tags: [docker, tls]
---
# {{ $frontmatter.title }}

> TLS configuration is invalid - make sure your DOCKER\_TLS\_VERIFY and DOCKER\_CERT\_PATH are set correctly

In _.bashrc_ add:

```bash
unset DOCKER_TLS_VERIFY
unset DOCKER_CERT_PATH
```
