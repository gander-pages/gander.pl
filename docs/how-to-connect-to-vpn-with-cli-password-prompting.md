---
title: How to connect to VPN with CLI password prompting
tags: [linux, vpn, nmcli, expect, screen]
---
# {{ $frontmatter.title }}

## Version 3:

Now, I can set it as startup script.
```bash
alias vpn='~/vpn/runvpn-start.sh'
```
`runvpn-start.sh`:

```bash
#!/usr/bin/env bash

cd $(dirname "${0}")
nmcli con down id my-vpn
screen -S vpn -X kill
screen -S vpn -d -m ./runvpn-except.sh
nmcli con up id my-vpn
cd -
```

`runvpn-except.sh`:

```bash
#!/usr/bin/env expect

set pass MySecredPassword

spawn ./runvpn

expect Pass:
send "$pass\r"

interact

expect eof
```

## Version 2:

```bash
alias vpn='cd ~/vpn && screen -m -d -S vpn ./runvpn-except.sh && nmcli con up id my-vpn'
```

`runvpn-except.sh`:

```bash
#!/usr/bin/env expect

set pass MySecredPassword

spawn ./runvpn

expect Pass:
send "$pass\r"

interact

expect eof
```

## Version 1:

Paste password from clipboard when user input; Press `CTRL+A` and `D` to detach and continue

```bash
alias vpn='cd ~/vpn && xclip -selection c ./pass && screen -S vpn ./runvpn && nmcli con up id my-vpn; xclip -selection c /dev/null'
```

#### Manuals:

*   [https://linux.die.net/man/1/expect](https://linux.die.net/man/1/expect)
*   [https://linux.die.net/man/1/nmcli](https://linux.die.net/man/1/nmcli)
*   [https://linux.die.net/man/1/xclip](https://linux.die.net/man/1/xclip)
*   [https://linux.die.net/man/1/screen](https://linux.die.net/man/1/screen)
