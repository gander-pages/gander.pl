---
lastUpdated: 2024-03-28T11:56:26+01:00
title: "Pimcore: Tinkerwell Driver"
topic: pimcore
tags: [ Pimcore, Tinkerwell, Custom, Driver ]
---


```php
<?php
class PimcoreTinkerwellDriver extends TinkerwellDriver
{
    public function canBootstrap($projectPath): bool
    {
        return true;
    }

    public function bootstrap($projectPath): void
    {
        require_once $projectPath . '/vendor/autoload.php';

        \Pimcore\Bootstrap::setProjectRoot();
        \Pimcore\Bootstrap::bootstrap();
        \Pimcore\Bootstrap::kernel();
    }

    public function appVersion(): string
    {
        return 'Pimcore ' . \Composer\InstalledVersions::getPrettyVersion('pimcore/pimcore');
    }

    public function getAvailableVariables(): array
    {
        return [
            'kernel' => \Pimcore::getKernel(),
            'container' => \Pimcore::getKernel()?->getContainer()->get('test.service_container'),
        ];
    }
}
```

When `PsySH Bundle` not installed, need config:

```yaml
services:
    test.service_container:
        class: Symfony\Bundle\FrameworkBundle\Test\TestContainer
        arguments: [ '@kernel', 'test.private_services_locator' ]
        public: true
```

When `user not exists` error occurs:

```yaml
services:
    php:
        user: 'dev:dev'
        build:
            dockerfile_inline: |
                FROM pimcore/pimcore:php8.2-debug-latest
                RUN adduser --disabled-password --gecos '' --uid 1000 dev
```

