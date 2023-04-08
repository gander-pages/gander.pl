# Scanning for btrfs file systems

It's not _"BTRFS scanning"_ hangs up system loading. After removing `btrfs-tools`, system still hanging here for few seconds. Sometimes new info appears: _"Begin: Running /scripts/local-premount"_.

Solution:

*   open `/etc/initramfs-tools/conf.d/resume`
*   replace `RESUME=UUID=xxx` with `RESUME=none`
*   run `sudo update-initramfs -u`
*   reboot your system

Related: [https://askubuntu.com/a/1034952](https://askubuntu.com/a/1034952)



[« Niuanse Symfony](niuanse-symfony.html)

[Hardware Tools »](hardware-tools.html)


