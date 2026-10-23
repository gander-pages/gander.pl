---
lastUpdated: 2023-04-11T01:08:30+02:00
title: Graylog Memory/Heap usage
topic: self-hosted
tags: [graylog, memory, heap]
---

For memory usage ~780MiB:

```yaml
services:
  elasticsearch:
    environment:
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
  graylog:
    environment:
      - "GRAYLOG_SERVER_JAVA_OPTS=-Xms768m -Xmx768m"
```

The JVM is using ???MiB of 729.6MiB heap space and will not attempt to use more than 729.6MiB
