---
lastUpdated: 2023-04-11T01:08:30+02:00
title: Transparent Delayed Screen Autolock
tags: [linux, bash, xautolock, xtrlock]
---

```bash
sudo apt install xtrlock xautolock

xautolock -notify 30 -notifier "notify-send -t 25000 LOCK" -time 5 -locker xtrlock
```
