---
lastUpdated: 2023-04-11T01:08:30+02:00
title: 'Ubuntu: error while loading shared libraries'
tags: [ubuntu, linux, error, shared, libraries]
---

1.  Run `ldd <executable>` to find missing libraries.
2.  Run `dpkg -S <missing lib>` to find packages, containing them.
3.  Install missing libs. Sometimes use `:i386` instead `:amd64`.
