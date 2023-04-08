import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Gander Site",
  description: "Code solutions, tips and tricks.",
  srcDir: 'docs',
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    sidebar: [
      {
        text: 'Solutions, tips & tricks:',
        items: [
          { text: 'jQuery getScript alternative', link: '/jquery-getscript-alternative' },
          { text: 'Docker Compose v2 - new dev hacks', link: '/docker-compose-v2-new-dev-hacks' },
          { text: 'Symfony 5/6', link: '/symfony' },
          { text: 'Laravel tips', link: '/laravel-tips' },
          { text: 'Signal Desktop Tray Icon', link: '/signal-desktop-tray-icon' },
          { text: 'yargs', link: '/yargs' },
          { text: 'How to resolve SAOError when using create-nuxt-app', link: '/how-to-resolve-saoerror-when-using-create-nuxt-app' },
          { text: 'PhpStorm Inotify Watches Limit', link: '/phpstorm-inotify-watches-limit' },
          { text: 'Linux Mint 20 NVIDIA Driver', link: '/linux-mint-20-nvidia-driver' },
          { text: 'Awesome Node.js Scripts', link: '/awesome-node-scripts' },
          { text: 'How to connect to VPN with CLI password prompting', link: '/how-to-connect-to-vpn-with-cli-password-prompting' },
          { text: 'DevTools', link: '/devtools' },
          { text: 'Transparent Delayed Screen Autolock', link: '/transparent-delayed-screen-autolock' },
          { text: 'MATE Desktop Environment', link: '/mate-desktop-environment' },
          { text: 'JetBrains IDE - File Watchers', link: '/jetbrains-file-watchers' },
          { text: 'Graylog Memory/Heap usage', link: '/graylog-memory-heap-usage' },
          { text: 'FFmpeg with NVIDIA Acceleration', link: '/ffmpeg-nvenc' },
          { text: 'Node.js and NPM+NPX', link: '/node-npm' },
          { text: 'NPM Missing deps', link: '/npm-missing-deps' },
          { text: '.bash_profile', link: '/bash-profile' },
          { text: 'Git tricks', link: '/git-tricks' },
          { text: 'CheckSum', link: '/checksum' },
          { text: 'Ansible cheatsheet', link: '/ansible-cheatsheet' },
          { text: 'Vue.js tips and tricks', link: '/vue-js-tips-and-tricks' },
          { text: '~/.ssh/config', link: '/ssh-config' },
          { text: 'PhpStorm Plugins', link: '/phpstorm-plugins' },
          { text: 'Windows: Switch Display Output using command line and hot keys', link: '/windows-swich-display-output-using-command-line-and-hot-keys' },
          { text: 'Linux reboot to EFI', link: '/linux-reboot-to-efi' },
          { text: 'Setup Linux Mint for PHP Dev', link: '/setup-linux-mint-for-php-dev' },
          { text: 'Start Symfony Project', link: '/start-symfony-project' },
          { text: 'Hardware Tools', link: '/hardware-tools' },
          { text: 'Scanning for btrfs file systems', link: '/scanning-for-btrfs-file-systems' },
          { text: 'Niuanse Symfony', link: '/niuanse-symfony' },
          { text: 'Symfony 4', link: '/symfony-4' },
          { text: 'PHP Tricks and Tips', link: '/php-tricks-and-tips' },
          { text: 'Disable Docker TLS', link: '/disable-docker-tls' },
          { text: 'Docker', link: '/docker' },
          { text: 'Google Chrome Extensions', link: '/google-chrome-extensions' },
          { text: 'dconf-tools', link: '/dconf-tools' },
          { text: 'Doctrine DebugStack with Symfony Console Table', link: '/doctrine-debugstack-with-symfony-console-table' },
          { text: 'Favourite code', link: '/favourite-code' },
          { text: 'PhpStorm tips and tricks', link: '/phpstorm-tips-and-tricks' },
          { text: 'JavaScript fixtures', link: '/javascript-fixtures' },
          { text: 'LAMP', link: '/lamp' },
          { text: 'My .bash_aliases', link: '/my-bash-aliases' },
          { text: 'Set GRUB to remember recently selected os', link: '/set-grub-to-remember-recently-selected-os' },
          { text: 'Delete multiple connections in LinkedIn', link: '/delete-multiple-connections-in-linkedin' },
          { text: 'Docker tips', link: '/docker-tips' },
          { text: 'JetBrains Linux .desktop file', link: '/jetbrains-linux-desktop-file' },
          { text: 'RegEx change chars case', link: '/regex-change-chars-case' },
          { text: 'JSFiddle quick add predefined external resources', link: '/jsfiddle-quick-add-predefined-external-resources' },
          { text: 'Take all registered jQuery Event Handlers', link: '/take-all-registered-jquery-event-handlers' },
          { text: 'sudo without password', link: '/sudo-without-password' },
          { text: 'Docker Engine and Docker Compose on Ubuntu 16.04', link: '/docker-engine-and-docker-compose-on-ubuntu-16-04' },
          { text: 'Code Snippets', link: '/code-snippets' },
          { text: 'Ubuntu: error while loading shared libraries', link: '/error-while-loading-shared-libraries' },
          { text: 'Debian CheatSheet', link: '/debian-cheatsheet' },
          { text: 'Windows 10 Auto LogIn', link: '/windows-10-auto-login' },
          { text: 'Bootstrap Grid forcing width', link: '/bootstrap-grid-forcing-width' },
          { text: 'InPost tracking number to link converter', link: '/inpost-tracking-number-to-link-converter' },
          { text: 'MySQL utf8 Default Charset', link: '/mysql-utf8-default-charset' }
        ]
      }
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/gander',
      },
      {
        icon: {svg: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32px" height="38px" viewBox="-135 22 32 38" xml:space="preserve"><g><polygon fill="#BCBBBB" points="-108.5,56.2 -108.5,46.3 -105.2,46.3 -105.2,59.5 -135,59.5 -135,46.3 -131.7,46.3 -131.7,56.2"/><path fill="#F48024" d="M-128,45.4l16.2,3.4l0.7-3.2l-16.2-3.4L-128,45.4z M-125.9,37.6l15,7l1.4-3l-15-7L-125.9,37.6z M-121.7,30.2l12.7,10.6l2.1-2.5l-12.7-10.6L-121.7,30.2z M-113.5,22.4l-2.7,2l9.9,13.3l2.7-2L-113.5,22.4z M-128.4,52.9h16.6 v-3.3h-16.6V52.9z"/></g></svg>'},
        link: 'https://stackoverflow.com/users/4559414/gander',
      },
      {
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/adam-gasowski/',
      },
    ]
  }
})
