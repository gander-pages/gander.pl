---
title: PHP Tricks and Tips
tags: [php, tricks, tips]
---
# {{ $frontmatter.title }}

Deployer / Capistrano with OPcache
==================================

`php.ini:`
```ini
opcache.use_cwd = 1
opcache.revalidate_path = 1
```
Source: [https://github.com/zendtech/ZendOptimizerPlus/issues/126#issuecomment-220969886](https://github.com/zendtech/ZendOptimizerPlus/issues/126#issuecomment-220969886)
