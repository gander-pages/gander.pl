---
title: "JetBrains: File Watchers"
subtitle: Using NVM
tags: [ JetBrains, File Watcher, NVM ]
---

# {{ $frontmatter.title }}

## {{ $frontmatter.subtitle }}

The `nvm` not working in JetBrains IDE. Need a workaround.

### Configuration

Put below variable into your `.bashrc`, `.zshrc`, or other shell profile.

```shell
export NVM_SYMLINK_CURRENT=true
```

Every time when you run `nvm use`, script will create symlink to the current version of node in `$NVM_DIR/current`. 

### File Watcher

#### Program

```shell
/home/user/.nvm/current/bin/npm
```

#### Arguments

```
run my-script $FilePath$
```

### In case of missing `node`

```shell
sudo ln -s /home/user/.nvm/current/bin/node /usr/local/bin/node
```

Sources:
+ [NVM README](https://github.com/nvm-sh/nvm/blob/master/README.md)
+ [Using nvm with WebStorm or other IDE](https://medium.com/@danielzen/using-nvm-with-webstorm-or-other-ide-d7d374a84eb1)
+ [node: No such file or directory](https://stackoverflow.com/a/62402757/4559414)

