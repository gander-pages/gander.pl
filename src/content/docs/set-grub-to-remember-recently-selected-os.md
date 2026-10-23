---
lastUpdated: 2023-04-11T01:08:30+02:00
title: Set GRUB to remember recently selected os
topic: linux
tags: [linux, grub]
---

At file `/etc/default/grub` set:
```
GRUB_DEFAULT=saved
GRUB_SAVEDEFAULT=true
```
then run `sudo update-grub`
