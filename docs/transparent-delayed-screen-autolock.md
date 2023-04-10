---
title: Transparent Delayed Screen Autolock
tags: [linux, bash, xautolock, xtrlock]
---
# {{ $frontmatter.title }}

```bash
sudo apt install xtrlock xautolock

xautolock -notify 30 -notifier "notify-send -t 25000 LOCK" -time 5 -locker xtrlock
```
