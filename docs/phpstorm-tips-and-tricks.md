# PhpStorm tips and tricks

### Pimple File Dumper - Helper Provider for Silex Idea Plugin

**PhpStorm**: _Settings » Plugins » Browse repositories... » Silex/Pimple plugin_
**Composer**: [https://packagist.org/packages/sorien/silex-pimple-dumper](https://packagist.org/packages/sorien/silex-pimple-dumper)
**Composer**: [https://packagist.org/packages/jbzoo/pimpledumper](https://packagist.org/packages/jbzoo/pimpledumper)

### Docker Remote Interpreters

**JetBrains Blog**: [Docker Remote Interpreters](https://blog.jetbrains.com/phpstorm/2016/11/docker-remote-interpreters/)
PhpStorm: _**Settings** » Languages & Frameworks » PHP_

*   **CLI Interpreter** » **\[...\]**
    *   _**CLI Interpreters** » **\[+\]** → Remote..._
    *   _**Configure PHP Remote Interpreter** → Docker → **\[New...\]**_
        *   _**Docker2** » API URL: `unix:///var/run/docker.sock`_
    *   _**Image name**_: `gander/dev:7.1`
    *   _**PHP excecutable**_: `php`
*   _**Path mappings**: `PhpStormProjects/project.dev` : `/www/project.dev`_
*   _**Docker container** » **\[...\]**_
    *   Network mode: `lamp_default` _(default: bridge)_
    *   Links: `lamp_pgsql_1` : `pgsql`
    *   Volume bindings: `/www/project.dev` : `PhpStormProjects/project.dev`

#### Info:

*   [Docker Remote Interpreters](https://blog.jetbrains.com/phpstorm/2016/11/docker-remote-interpreters/)
*   [Debugging PHP CLI scripts with PhpStorm](https://confluence.jetbrains.com/display/PhpStorm/Debugging+PHP+CLI+scripts+with+PhpStorm)

### Favourite settings

*   _File | Settings | Editor | General | Code Folding_
    *   General
        *   File header
    *   PHP
        *   Imports
    *   XML
        *   HTML 'style' attribute
*   _File | Settings | Version Control | Confirmation_
    *   Restore workspace on branch switching

### File Types

**PhpStorm**: _Settings_ » _Editor_ » _File Types_:

Recognized File Types

Registered patterns

Docker

_Dockerfile.\*_

JSON

_\*.json.dist_
_composer.lock_
_composer.lock.dist_

YAML

_\*.yml.dist_
_\*.yaml.dist_

Ignore

_.git-ftp-ignore_
_.git-ftp-include_

    /**\n * @var $2\n*/\npublic \$$1;

### PhpStorm Dictionary

*   Source: [Polski słownik do PhpStorm](https://tomaszkane.net/2014/09/polski-slownik-do-phpstorm/)
*   File: [polish.dic.zip](files/polish.dic.zip)

### Favourite plugins

*   PHP Toolbox
*   PHP Annotations
*   Symfony Plugin
*   Silex/Pimple Plugin
*   PHP composer.json support
*   .ignore
*   BashSupport
*   String Manipulation
