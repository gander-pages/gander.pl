---
lastUpdated: 2023-04-11T01:08:30+02:00
title: MySQL utf8 Default Charset
topic: database
tags: [mysql, utf8, utf8mb4]
---

`my.cnf`

```ini
[mysqld]
# Version 5.5.3 introduced "utf8mb4", which is recommended
collation-server     = utf8mb4_general_ci # Replaces utf8_general_ci
character-set-server = utf8mb4            # Replaces utf8
```
