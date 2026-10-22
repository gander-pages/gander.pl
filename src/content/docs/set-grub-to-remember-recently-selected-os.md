---
title: Set GRUB to remember recently selected os
tags: [linux, grub]
---

At file `/etc/default/grub` set:
```
GRUB_DEFAULT=saved
GRUB_SAVEDEFAULT=true
```
then run `sudo update-grub`
