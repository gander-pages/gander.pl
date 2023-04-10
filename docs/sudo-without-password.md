---
title: sudo without password
tags: [linux, sudo, password]
---
# {{ $frontmatter.title }}

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
