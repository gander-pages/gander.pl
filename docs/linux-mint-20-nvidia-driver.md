# Linux Mint 20 NVIDIA Driver

Config:
-------

*   System:
    *   Kernel: 5.4.0-52-generic x86\_64
    *   Desktop: Cinnamon 4.6.7
    *   Distro: Linux Mint 20 Ulyana
    *   Base: Ubuntu 20.04 focal
*   Graphics:
    *   Device: NVIDIA GM204 \[GeForce GTX 970\]
    *   Driver: nvidia v: 450.80.02

Steps:
------
```bash
sudo apt-get purge *nvidia*
sudo apt-get autoremove
reboot
```
Download nvidia driver
```bash
echo 'blacklist nouveau' | sudo tee /etc/modprobe.d/disable-nouveau.conf
sudo update-initramfs -u
reboot
```
`_CTRL + ALT + F1_` to switch to text mode
```bash
sudo service lightdm stop
```
Run nvidia installer


| question         | answer   |
|------------------|----------|
| alternate method | continue |
| DKMS             | yes      |
| 32bit            | yes      |
| ?                | yes      |
| nvidia-xconfig   | no       |

```bash
sudo service lightdm start
```

*   Run _NVIDIA X Server Settings_ (`nvidia-settings`)
*   Go to _X Server Display Configuration_
*   Click _Save to X Configuration File_

Sources:
--------

*   » [Mint 20 Nvidia Driver Installation Update](https://forums.linuxmint.com/viewtopic.php?t=154932&start=39) «
*   [Release Notes for Linux Mint 20 Cinnamon](https://www.linuxmint.com/rel_ulyana_cinnamon.php)
*   [Unix Driver Archive](https://www.nvidia.com/en-us/drivers/unix/)
*   [ACPI errors and graphics card drivers issues](https://forums.linuxmint.com/viewtopic.php?t=328023)
*   [NVIDIA X server settings is displaying empty window](https://superuser.com/questions/1394120/nvidia-x-server-settings-is-displaying-empty-window)
