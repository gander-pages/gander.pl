---
title: PhpStorm Inotify Watches Limit
tags: [phpstorm, inotify, watches, limit]
---
# {{ $frontmatter.title }}

```bash
echo 'fs.inotify.max_user_watches = 524288' | sudo tee -a /etc/sysctl.d/idea.conf
sudo sysctl -p --system
```
Restart IDE.

Source: [Inotify Watches Limit](https://confluence.jetbrains.com/display/IDEADEV/Inotify+Watches+Limit)
