---
title: "JOSM: Install on Linux Mint"
tags: [ JOSM, Linux Mint, Install ]
---

# {{ $frontmatter.title }}

Add package resource list:
```shell
echo "deb [arch=amd64 signed-by=/usr/local/share/keyrings/josm-apt.gpg] https://josm.openstreetmap.de/apt $(grep ^DISTRIB_CODENAME= /etc/upstream-release/lsb-release| awk -F = '{print $(2)}') universe" | sudo tee /etc/apt/sources.list.d/josm.list > /dev/null
```

Download the public key:
```shell
wget -q https://josm.openstreetmap.de/josm-apt.key -O- | sudo gpg --dearmor -o /usr/local/share/keyrings/josm-apt.gpg
```

Update sources:
```shell
sudo apt-get update
```

Install tested version:
```shell
sudo apt-get install josm
```

Or install development version:
```shell
sudo apt-get install josm-latest
```

---

Source: https://josm.openstreetmap.de/wiki/Download#Ubuntu
