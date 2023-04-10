---
title: ~/.ssh/config
tags: [ssh, config]
---
# {{ $frontmatter.title }}

## Config inheritance

**First obtained value will be used:**

Config:

```
Host foo
User foot

Host barry
IdentityFile ~/.ssh/another

Host bar*
User bart

Host barman
User barman
HostName barman.example.com

Host foo bar*
HostName example.com

Host foo
IdentityFile ~/.ssh/foo

Host bar*
IdentityFile ~/.ssh/%h
```

Effect:


| run       | result                                            |
|-----------|---------------------------------------------------|
| `ssh foo` | `ssh foot@example.com -i ~/.ssh/foo`              |
| `ssh bar` | `ssh bart@example.com -i ~/.ssh/bar`              |
| `ssh barman` | `ssh bart@barman.example.com -i ~/.ssh/barman` |
| `ssh barry` | `ssh bart@example.com -i ~/.ssh/another`        |
| `ssh barqa` | `ssh bart@example.com -i ~/.ssh/barqa`          |

Source: [https://linux.die.net/man/5/ssh\_config](https://linux.die.net/man/5/ssh_config)

## Prevent **_"Too many authentication failures"_** error

Use:

```
Host *
IdentitiesOnly=yes
```

Source: [How to Fix "SSH Too Many Authentication Failures" Error](https://www.tecmint.com/fix-ssh-too-many-authentication-failures-error/)

