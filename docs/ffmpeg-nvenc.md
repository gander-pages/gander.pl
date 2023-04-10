---
title: FFmpeg with NVIDIA Acceleration
tags: [ffmpeg, nvidia, hardware acceleration]
---
# {{ $frontmatter.title }}

## Using NVIDIA hardware acceleration in FFmpeg/libav requires the following steps

1. Download and install the compatible driver from NVIDIA [web site](https://www.nvidia.com/drivers)
2. Download and install `ffnvcodec`:
```bash
        git clone https://git.videolan.org/git/ffmpeg/nv-codec-headers.git
        cd nv-codec-headers && sudo make install && cd -
```
3. Download and install the CUDA Toolkit [CUDA toolkit](https://developer.nvidia.com/cuda-toolkit)
#### For **Linux Mint 19.3**:
```bash
wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu1804/x86_64/cuda-ubuntu1804.pin
sudo mv cuda-ubuntu1804.pin /etc/apt/preferences.d/cuda-repository-pin-600
sudo apt-key adv --fetch-keys https://developer.download.nvidia.com/compute/cuda/repos/ubuntu1804/x86_64/7fa2af80.pub
sudo add-apt-repository "deb https://developer.download.nvidia.com/compute/cuda/repos/ubuntu1804/x86_64/ /"
sudo apt-get update
sudo apt-get -y install cuda
```
4. Ensure that your `PATH` includes the bin directory where you installed the Toolkit
```bash
export PATH=/usr/local/cuda-10.2/bin${PATH:+:${PATH}}
```
5. Install `sudo apt install nasm yasm`
6. Download the latest [FFmpeg](https://www.ffmpeg.org/) or [libav](https://www.libav.org/) source code, by cloning the corresponding GIT repositories
    + FFmpeg: [https://git.ffmpeg.org/ffmpeg.git](https://git.ffmpeg.org/ffmpeg.git)
    + Libav: [https://github.com/libav/libav](https://github.com/libav/libav)
7. Use the following configure command (Use correct CUDA library path in config command below)
```bash
./configure --enable-cuda-nvcc --enable-cuvid --enable-nvenc --enable-nonfree --enable-libnpp --extra-cflags=-I/usr/local/cuda/include --extra-ldflags=-L/usr/local/cuda/lib64
```
8. Use the following command to compile:
```bash
make -j $(nproc)
```
9. Install
```bash
sudo make install
```

### Sources:

*   [https://developer.nvidia.com/ffmpeg](https://developer.nvidia.com/ffmpeg)
*   [https://docs.nvidia.com/cuda/cuda-installation-guide-linux/](https://docs.nvidia.com/cuda/cuda-installation-guide-linux/)
