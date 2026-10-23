---
lastUpdated: 2023-04-11T01:08:30+02:00
title: PHP Tricks and Tips
tags: [php, tricks, tips]
---

Deployer / Capistrano with OPcache
==================================

`php.ini:`
```ini
opcache.use_cwd = 1
opcache.revalidate_path = 1
```
Source: [https://github.com/zendtech/ZendOptimizerPlus/issues/126#issuecomment-220969886](https://github.com/zendtech/ZendOptimizerPlus/issues/126#issuecomment-220969886)
