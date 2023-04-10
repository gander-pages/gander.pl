---
title: Docker tips
tags: [docker, tips]
---
# {{ $frontmatter.title }}

## Remove:

```bash
docker container ls --all | tail -n +2 | awk '{print $1}' | xargs docker container rm -f
docker network ls | tail -n +2 | awk '{print $1}' | xargs docker network rm
docker volume ls | tail -n +2 | awk '{print $2}' | xargs docker volume rm -f
docker image ls | tail -n +2 | awk '{print $3}' | xargs docker image rm -f
```

## Pull:

```bash
docker images | tail -n +2 | awk '{print $1":"$2}' | xargs -l docker pull
```

### Related content:

*   [LAMP](lamp.html)
