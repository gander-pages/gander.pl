# Git tricks

**Start Git with an empty:**

    # commit
    git commit --allow-empty --message "Initial commit"
    # message
    git commit --allow-empty-message --message ''
    # commit and message
    git commit --allow-empty --allow-empty-message --message ''

**Remove all local branches without current**

    git branch | grep -v `git branch --show-current` | xargs -r git branch -vD

[« CheckSum](checksum.html)

[.bash\_profile »](bash-profile.html)


