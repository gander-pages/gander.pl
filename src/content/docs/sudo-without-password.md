---
lastUpdated: 2023-04-11T01:08:30+02:00
title: sudo without password
tags: [linux, sudo, password]
---

To set `sudo` without asking for a password:

`<username>` = your user name

Run as root:

```bash
visudo -f /etc/sudoers.d/<username>
```

Write:
```bash
<username> ALL=(ALL) NOPASSWD: ALL
```
Save & restart console.

One command:
```bash
echo "$USER ALL=(ALL) NOPASSWD: ALL" | sudo tee /etc/sudoers.d/$USER
```
