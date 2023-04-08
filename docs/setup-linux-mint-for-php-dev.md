# Setup Linux Mint for PHP Dev

```bash
cat /etc/upstream-release/lsb-release

sudo apt-get update
sudo apt-get install --yes \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
sudo apt-get update
sudo apt-get install --yes docker-ce
sudo usermod -aG docker $USER
sudo curl -L https://github.com/docker/compose/releases/download/1.22.0/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose

sudo add-apt-repository ppa:ondrej/php
sudo apt-get update
sudo apt-get install php7.3-cli php7.3-json php7.3-zip php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-mbstring php7.3-opcache php7.3-readline
```

*   [https://getcomposer.org/download/](https://getcomposer.org/download/)
*   [https://symfony.com/download](https://symfony.com/download)

```bash
sudo mv composer.phar /usr/local/bin/composer
sudo mv /home/${USER}/.symfony/bin/symfony /usr/local/bin/symfony

sudo apt-get install curl python-software-properties
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g npm

curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn

sudo add-apt-repository ppa:linuxuprising/java
sudo apt install oracle-java11-installer
sudo apt install oracle-java11-set-default

echo fs.inotify.max_user_watches = 524288 | sudo tee /etc/sysctl.d/00-inotify.conf
sudo sysctl -p --system
```


