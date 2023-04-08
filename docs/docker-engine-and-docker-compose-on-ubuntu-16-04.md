# Docker Engine and Docker Compose on Ubuntu 16.04

```bash
echo deb https://apt.dockerproject.org/repo ubuntu-xenial main | sudo tee /etc/apt/sources.list.d/docker.list
sudo apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
sudo apt-get update
sudo apt-get install linux-image-extra-$(uname -r) linux-image-extra-virtual linux-image-generic docker-engine

sudo service docker start
sudo groupadd docker
sudo usermod -aG docker $USER
```

Logout & Login again

```bash
curl -L https://github.com/docker/compose/releases/download/1.11.2/docker-compose-`uname -s`-`uname -m` > /tmp/docker-compose
sudo cp /tmp/docker-compose /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

Check: [https://github.com/docker/compose/releases/latest](https://github.com/docker/compose/releases/latest)

### Related content:

*   [LAMP](lamp.html)
