// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const head = [
  { tag: 'link', attrs: { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' } },
  { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' } },
  { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' } },
  { tag: 'link', attrs: { rel: 'manifest', href: '/site.webmanifest' } },
];

if (process.env.VITE_UMAMI_ID && process.env.VITE_UMAMI_SRC) {
  head.push({
    tag: 'script',
    attrs: { async: true, 'data-website-id': process.env.VITE_UMAMI_ID, src: process.env.VITE_UMAMI_SRC },
  });
}

if (process.env.VITE_MEDAMA_SRC) {
  head.push({ tag: 'script', attrs: { defer: true, src: process.env.VITE_MEDAMA_SRC } });
}

export default defineConfig({
  site: 'https://gander.pl',
  trailingSlash: 'never',
  integrations: [
    starlight({
      title: 'Gander Site',
      description: 'Code solutions, tips and tricks.',
      favicon: '/favicon.ico',
      lastUpdated: true,
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 6 },
      editLink: { baseUrl: 'https://github.com/gander-pages/gander.pl/edit/master/' },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/gander' },
        { icon: 'stackOverflow', label: 'Stack Overflow', href: 'https://stackoverflow.com/users/4559414/gander' },
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/adam-gasowski/' },
      ],
      head,
      components: {
        PageTitle: './src/components/PageTitle.astro',
        SocialIcons: './src/components/SocialIcons.astro',
      },
      sidebar: [
        {
          label: 'Services',
          items: [{ label: 'IFTTT: Maker Webhooks', link: '/solutions/services/ifttt-maker-webhooks' }],
        },
        {
          label: 'Self-Hosted',
          items: [
            {
              label: 'Sentry',
              items: [
                { label: 'Install & Backup', link: '/solutions/self-hosted/sentry' },
                { label: 'Feature Flags', link: '/solutions/self-hosted/sentry/feature-flags' },
              ],
            },
            { label: 'Fluentd: Docker Compose', link: '/solutions/self-hosted/fluentd-docker-compose' },
          ],
        },
        {
          label: 'Pimcore',
          items: [
            { label: 'Action Argument Resolving', link: '/solutions/pimcore/action-argument-resolving' },
            { label: 'Workflow Management', link: '/solutions/pimcore/workflows' },
            { label: 'Tinkerwell Driver', link: '/solutions/pimcore/tinkerwell-driver' },
            { label: 'ExtJS', link: '/solutions/pimcore/ext-js' },
          ],
        },
        {
          label: 'Tools / Projects',
          items: [
            { label: 'Buggregator', link: '/tools/buggregator' },
            {
              label: 'JetBrains',
              items: [
                { label: 'PhpStorm: LightEdit', link: '/tools/jet-brains/php-storm/light-edit' },
                {
                  label: 'File Watchers',
                  items: [
                    { label: 'Macro Preview', link: '/tools/jet-brains/file-watchers/macro-preview' },
                    { label: 'Using NVM', link: '/tools/jet-brains/file-watchers/using-nvm' },
                  ],
                },
              ],
            },
            {
              label: 'GitHub',
              items: [{ label: 'Remove failed workflows', link: '/tools/github/delete-failed-workflows-cli' }],
            },
            {
              label: 'Open Street Map',
              items: [
                { label: 'OSM: Cheat Sheet', link: 'https://wiki.openstreetmap.org/wiki/User:GanderPL' },
                { label: 'JOSM: Install on Linux Mint', link: '/tools/osm/josm/install-on-linux-mint' },
              ],
            },
            { label: 'NMS Frigate Calc', link: '/tools/nms-frigate-calc' },
          ],
        },
        {
          label: 'Utils',
          items: [{ label: 'List', link: '/utils' }],
        },
        {
          label: 'Outdated:',
          collapsed: true,
          items: [
            { label: 'Debian CheatSheet', link: '/debian-cheatsheet' },
            { label: 'Doctrine DebugStack with Symfony Console Table', link: '/doctrine-debugstack-with-symfony-console-table' },
            { label: 'FFmpeg with NVIDIA Acceleration', link: '/ffmpeg-nvenc' },
            { label: 'Git tricks', link: '/git-tricks' },
            { label: 'Graylog Memory/Heap usage', link: '/graylog-memory-heap-usage' },
            { label: 'How to connect to VPN with CLI password prompting', link: '/how-to-connect-to-vpn-with-cli-password-prompting' },
            { label: 'How to resolve SAOError when using create-nuxt-app', link: '/how-to-resolve-saoerror-when-using-create-nuxt-app' },
            { label: 'JSFiddle quick add predefined external resources', link: '/jsfiddle-quick-add-predefined-external-resources' },
            { label: 'JetBrains Linux .desktop file', link: '/jetbrains-linux-desktop-file' },
            { label: 'Linux Mint 20 NVIDIA Driver', link: '/linux-mint-20-nvidia-driver' },
            { label: 'Linux reboot to EFI', link: '/linux-reboot-to-efi' },
            { label: 'MATE Desktop Environment', link: '/mate-desktop-environment' },
            { label: 'MySQL utf8 Default Charset', link: '/mysql-utf8-default-charset' },
            { label: 'PhpStorm Inotify Watches Limit', link: '/phpstorm-inotify-watches-limit' },
            { label: 'PhpStorm Plugins', link: '/phpstorm-plugins' },
            { label: 'RegEx change chars case', link: '/regex-change-chars-case' },
            { label: 'Scanning for btrfs file systems', link: '/scanning-for-btrfs-file-systems' },
            { label: 'Set GRUB to remember recently selected os', link: '/set-grub-to-remember-recently-selected-os' },
            { label: 'Signal Desktop Tray Icon', link: '/signal-desktop-tray-icon' },
            { label: 'Symfony 5/6', link: '/symfony' },
            { label: 'Symfony Quirks', link: '/symfony-quirks' },
            { label: 'Take all registered jQuery Event Handlers', link: '/take-all-registered-jquery-event-handlers' },
            { label: 'Transparent Delayed Screen Autolock', link: '/transparent-delayed-screen-autolock' },
            { label: 'Windows 10 Auto LogIn', link: '/windows-10-auto-login' },
            { label: 'Windows: Switch Display Output using command line and hot keys', link: '/windows-swich-display-output-using-command-line-and-hot-keys' },
            { label: 'dconf-tools', link: '/dconf-tools' },
            { label: 'jQuery getScript alternative', link: '/jquery-getscript-alternative' },
            { label: '~/.ssh/config', link: '/ssh-config' },
          ],
        },
      ],
    }),
  ],
});
