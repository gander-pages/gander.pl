---
title: .bash_profile
tags: [bash, bash_profile, bashrc, bash_aliases, .bash_profile, .bashrc, .bash_aliases, .prof]
---
# {{ $frontmatter.title }}

## `.bash_profile`

```bash
# include .profile if it exists (login shell, ssh connect bash)
if [[ -f "$HOME/.profile" ]] ; then
    source "$HOME/.profile"
fi

# include .bashrc if it exists (non-login shell, new bash instance)
if [[ -f "$HOME/.bashrc" ]] ; then
    source "$HOME/.bashrc"
fi

# include .bash_aliases if it exists
if [[ -f "$HOME/.bash_aliases" ]] ; then
    source "$HOME/.bash_aliases"
fi

# set PATH so it includes user's private bin if it exists
if [[ -d "$HOME/bin" ]] ; then
    PATH="$HOME/bin:$PATH"
fi

# set PATH so it includes user's private bin if it exists
if [[ -d "$HOME/.local/bin" ]] ; then
    PATH="$HOME/.local/bin:$PATH"
fi

# set PATH so it includes user's private npm-bin if it exists
if [[ -d "$HOME/.npm-global/bin" ]] ; then
    PATH="$HOME/.npm-global/bin:$PATH"
fi

export PATH

# .user.ini location for php-cli
export PHP_INI_SCAN_DIR="$HOME"
```

## `.npmrc`

```ini
prefix=~/.npm-global
```

### Related content:

*   [Node.js and NPM+NPX](node-npm.html)


