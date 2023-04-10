---
title: LAMP
tags: [docker, docker-compose, php, mysql, postgresql, phpmyadmin]
---
# {{ $frontmatter.title }}

`docker-compose.yml`

```yaml
version: "3"
services:
  mysql:
    hostname: "mysql"
    image: "mysql"
    volumes:
      - "./mysql:/var/lib/mysql"
      - "$HOME/PhpstormProjects:/www"
    working_dir: "/www"
    environment:
      - "MYSQL_ROOT_PASSWORD=<password>"
    ports:
      - "3306:3306"
    command: [mysqld, --character-set-server=utf8mb4, --collation-server=utf8mb4_unicode_ci]
  phpmyadmin:
    image: "phpmyadmin/phpmyadmin"
    environment:
      - "MYSQL_ROOT_PASSWORD=<password>"
    ports:
      - "8080:80"
    links:
      - "mysql:db"
  pgsql:
    hostname: "pgsql"
    image: "postgres"
    volumes:
      - "./pgsql:/var/lib/postgresql/data"
      - "$HOME/PhpstormProjects:/www"
    working_dir: "/www"
    environment:
      - "POSTGRES_PASSWORD=<password>"
    ports:
      - "5432:5432"
  pgadmin4:
    image: "fenglc/pgadmin4"
    ports:
      - "5050:5050"
    links:
      - "pgsql"
  dev56:
    hostname: "dev56"
    image: "gander/php-apache-dev:5.6"
    volumes:
      - "$HOME/PhpstormProjects:/www"
      - "./dev.composer:/home/dev/.composer"
      - "./dev.bash_aliases:/home/dev/.bash_aliases"
    working_dir: "/www"
    ports:
      - "8056:80"
    links:
      - "mysql"
      - "pgsql"
  dev70:
    hostname: "dev70"
    image: "gander/php-apache-dev:7.0"
    volumes:
      - "$HOME/PhpstormProjects:/www"
      - "./dev.composer:/home/dev/.composer"
      - "./dev.bash_aliases:/home/dev/.bash_aliases"
    working_dir: "/www"
    ports:
      - "8070:80"
    links:
      - "mysql"
      - "pgsql"
  dev71:
    hostname: "dev71"
    image: "gander/php-apache-dev:7.1"
    volumes:
      - "$HOME/PhpstormProjects:/www"
      - "./dev.composer:/home/dev/.composer"
      - "./dev.bash_aliases:/home/dev/.bash_aliases"
    working_dir: "/www"
    ports:
      - "80:80"
      - "8071:80"
    links:
      - "mysql"
      - "pgsql"
```


### Related content:

*   [My .bash\_aliases](my-bash-aliases.html)
*   [Docker tips](docker-tips.html)
*   [Docker Engine and Docker Compose on Ubuntu 16.04](docker-engine-and-docker-compose-on-ubuntu-16-04.html)
