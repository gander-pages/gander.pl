---
lastUpdated: 2023-04-11T01:08:30+02:00
title: JetBrains Linux .desktop file
topic: jetbrains
tags: [jetbrains, linux, desktop, file]
---

Locations: `~/.local/share/applications` or `/usr/share/applications`

`jetbrains-phpstorm.desktop`
```ini
[Desktop Entry]
Version=1.0
Type=Application
Name=PhpStorm
Icon=/opt/phpstorm/bin/phpstorm.png
Exec=/opt/phpstorm/bin/phpstorm.sh %f
Comment=The Drive to Develop
Categories=Development;IDE;
Terminal=false
StartupWMClass=jetbrains-phpstorm
```
_jetbrains-datagrip.desktop_
```ini
[Desktop Entry]
Version=1.0
Type=Application
Name=DataGrip
Icon=/opt/datagrip/bin/product.png
Exec=/opt/datagrip/bin/datagrip.sh %f
Comment=The Drive to Develop
Categories=Development;IDE;
Terminal=false
StartupWMClass=jetbrains-datagrip
```
