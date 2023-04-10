---
title: Git tricks
tags: [git]
---
# {{ $frontmatter.title }}

**Start Git with an empty:**

```bash
# commit
git commit --allow-empty --message 'Initial commit'
# message
git commit --allow-empty-message --message ''
# commit and message
git commit --allow-empty --allow-empty-message --message ''
```

**Remove all local branches without current**

```bash
git branch | grep -v `git branch --show-current` | xargs -r git branch -vD
```
