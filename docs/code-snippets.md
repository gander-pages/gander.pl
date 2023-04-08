# Code Snippets

#### Adminer fast select tables by prefix

    $('input[type="checkbox"][name="tables[]"][value^="prefix_"').trigger('click');

    $('input[type="checkbox"][name="data[]"][value^="prefix_"').trigger('click');

* * *

#### MySQL utf8 default charset in my.cnf

    [mysqld]
    collation-server     = utf8mb4_general_ci
    character-set-server = utf8mb4

#### RegEx

regex

description

`(?: )`

Non-capturing group

`(?! )`

Prevents matching a pattern

[https://www.regular-expressions.info/lookaround.html](https://www.regular-expressions.info/lookaround.html)



[« Ubuntu: error while loading shared libraries](error-while-loading-shared-libraries.html)

[Docker Engine and Docker Compose on Ubuntu 16.04 »](docker-engine-and-docker-compose-on-ubuntu-16-04.html)


