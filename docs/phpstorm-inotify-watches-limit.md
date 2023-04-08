# PhpStorm Inotify Watches Limit

    echo 'fs.inotify.max_user_watches = 524288' | sudo tee -a /etc/sysctl.d/idea.conf
    sudo sysctl -p --system

Restart IDE.

Source: [Inotify Watches Limit](https://confluence.jetbrains.com/display/IDEADEV/Inotify+Watches+Limit)

[« Linux Mint 20 NVIDIA Driver](linux-mint-20-nvidia-driver.html)

[How to resolve SAOError when using create-nuxt-app »](how-to-resolve-saoerror-when-using-create-nuxt-app.html)


