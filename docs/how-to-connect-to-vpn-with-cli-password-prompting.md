# How to connect to VPN with CLI password prompting

### Version 3:

Now, I can set it as startup script.

    alias vpn='~/vpn/runvpn-start.sh'

_runvpn-start.sh_:

    #!/usr/bin/env bash

    cd $(dirname "${0}")
    nmcli con down id my-vpn
    screen -S vpn -X kill
    screen -S vpn -d -m ./runvpn-except.sh
    nmcli con up id my-vpn
    cd -

_runvpn-except.sh_:

    #!/usr/bin/env expect

    set pass MySecredPassword

    spawn ./runvpn

    expect Pass:
    send "$pass\r"

    interact

    expect eof

### Version 2:

    alias vpn='cd ~/vpn && screen -m -d -S vpn ./runvpn-except.sh && nmcli con up id my-vpn'

_runvpn-except.sh_:

    #!/usr/bin/env expect

    set pass MySecredPassword

    spawn ./runvpn

    expect Pass:
    send "$pass\r"

    interact

    expect eof

### Version 1:

Paste password from clipboard when user input; Press `CTRL+A` and `D` to detach and continue

    alias vpn='cd ~/vpn && xclip -selection c ./pass && screen -S vpn ./runvpn && nmcli con up id my-vpn; xclip -selection c /dev/null'

#### Manuals:

*   [https://linux.die.net/man/1/expect](https://linux.die.net/man/1/expect)
*   [https://linux.die.net/man/1/nmcli](https://linux.die.net/man/1/nmcli)
*   [https://linux.die.net/man/1/xclip](https://linux.die.net/man/1/xclip)
*   [https://linux.die.net/man/1/screen](https://linux.die.net/man/1/screen)



[« DevTools](devtools.html)

[Awesome Node.js Scripts »](awesome-node-scripts.html)


