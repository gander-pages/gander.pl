# My .bash\_aliases

    # Misc
    alias xclip='xclip -selection clipboard'
    alias a='apt update; apt upgrade -y; apt autoremove'

    # Docker Compose
    alias dcup='docker-compose up'
    alias dcdn='docker-compose down'

    # LAMP via Docker Compose
    alias lamp='_PWD=${PWD} && cd ${HOME}/.lamp && docker-compose up -d; cd ${_PWD}'
    alias unlamp='_PWD=${PWD} && cd ${HOME}/.lamp && docker-compose down; cd ${_PWD}'
    alias dev='docker exec -it lamp_dev_1 bash'
    alias mysql='docker exec -it lamp_mysql_1 mysql'
    alias psql='docker exec -it lamp_pgsql_1 psql -U postgres'

    alias pgsql_='docker exec -it lamp_pgsql_1 bash'
    alias mysql_='docker exec -it lamp_mysql_1 bash'

    alias node='docker run -it --rm --name node -v "$PWD":/usr/src/app -w /usr/src/app node node'
    alias node7='docker run -it --rm --name node7 -v "$PWD":/usr/src/app -w /usr/src/app node:7 node'
    alias node6='docker run -it --rm --name node6 -v "$PWD":/usr/src/app -w /usr/src/app node:6 node'
    alias node4='docker run -it --rm --name node4 -v "$PWD":/usr/src/app -w /usr/src/app node:4 node'

    alias node='docker run -it --rm --name node -v "$PWD":/src:rw mkenney/npm'



### Related content:

*   [LAMP](lamp.html)

[« Set GRUB to remember recently selected os](set-grub-to-remember-recently-selected-os.html)

[LAMP »](lamp.html)


