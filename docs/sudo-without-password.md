# sudo without password

To set `sudo` without asking for a password:

`<username>` = your user name

Run as root:

    visudo -f /etc/sudoers.d/<username>

Write:

    <username> ALL=(ALL) NOPASSWD: ALL

Save & restart console.

One command:

    echo "$USER ALL=(ALL) NOPASSWD: ALL" | sudo tee /etc/sudoers.d/$USER



[« Docker Engine and Docker Compose on Ubuntu 16.04](docker-engine-and-docker-compose-on-ubuntu-16-04.html)

[Take all registered jQuery Event Handlers »](take-all-registered-jquery-event-handlers.html)


