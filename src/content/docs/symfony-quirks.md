---
lastUpdated: 2023-04-11T01:08:30+02:00
title: Symfony Quirks
tags: [symfony, php]
---

Serializer
==========

Groups
------

You have to initialize `MetaClassFactory` for groups to work.

Workflow
========

You have to add exactly one `from` -> `to` transition. If you need `[from, from, from]` -> `to`, add multiple transitions with the same name.
