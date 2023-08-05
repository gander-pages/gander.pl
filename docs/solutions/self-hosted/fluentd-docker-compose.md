---
title: "Fluentd: Docker Compose"
tags: [Fluentd, Docker, Compose, Elastic, Search, Elasticsearch, Kibana, Logs]
---
# {{ $frontmatter.title }}

Following the official documentation, I found that the solution described [here](https://docs.fluentd.org/container-deployment/docker-compose) is already very outdated. 
Doesn't work. So I searched and found the solution here: [[Issue #391] Docker compose example from official docs broken?](https://github.com/fluent/fluentd-docs-gitbook/issues/391)

## Prepare Docker

### `docker-compose.yml`

```yaml
version: "3"

services:
  web:
    image: httpd
    ports:
      - "80:80"
    links:
      - fluentd
    logging:
      driver: "fluentd"
      options:
        fluentd-address: localhost:24224
        tag: httpd.access

  fluentd:
    build: ./fluentd
    volumes:
      - ./fluentd/conf:/fluentd/etc
    links:
      - "elasticsearch"
    ports:
      - "24224:24224"
      - "24224:24224/udp"

  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:8.1.2
    container_name: elasticsearch
    environment:
      - "discovery.type=single-node"
      - xpack.security.enabled=false
    expose:
      - "9200"
    ports:
      - "9200:9200"

  kibana:
    image: docker.elastic.co/kibana/kibana:8.1.2
    links:
      - "elasticsearch"
    ports:
      - "5601:5601"
```


### `fluentd/Dockerfile`

```Dockerfile
FROM fluent/fluentd:v1.12.0-debian-1.0
USER root
RUN ["gem", "install", "elasticsearch", "--no-document", "--version", "< 8"]
RUN ["gem", "install", "fluent-plugin-elasticsearch", "--no-document", "--version", "5.2.2"]
USER fluent
```


### `fluentd/conf/fluent.conf`

```
<source>
  @type forward
  port 24224
  bind 0.0.0.0
</source>

<match *.**>
  @type copy

  <store>
    @type elasticsearch
    host elasticsearch
    port 9200
    logstash_format true
    logstash_prefix fluentd
    logstash_dateformat %Y%m%d
    include_tag_key true
    type_name access_log
    tag_key @log_name
    flush_interval 1s
  </store>

  <store>
    @type stdout
  </store>
</match>
```


### Start containers

```shell
docker compose up --detach
```

## Prepare Dashboard


### Generate `http` Access Logs

```shell
$ curl http://localhost:80/[1-10]
```


### Kibana Data Views

+ Go to http://localhost:5601/app/management/kibana/dataViews
+ Click button `Create data view`
+ In field `Name` enter: 
  ```
  fluentd-*
  ```
+ Click button `Create data view`
+ Go to `Discover` view: http://localhost:5601/app/discover

