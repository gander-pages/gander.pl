# Node.js and NPM+NPX

*   [https://nodejs.org/en/](https://nodejs.org/en/)
*   [https://github.com/nodesource/distributions/blob/master/README.md#installation-instructions](https://github.com/nodesource/distributions/blob/master/README.md#installation-instructions)

## User global:
```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bash_profile
```
### Install global:
```bash
npm install -g npm
npm install -g nodemon now serve local-web-server json-server
npm install -g typescript @vue/cli @vue/cli-service-global
```
### Starter kits
```bash
npx create-<starter-kit-package>
npm init <starter-kit-package>
yarn create <starter-kit-package>
```
*   [https://yarnpkg.com/lang/en/docs/cli/create/](https://yarnpkg.com/lang/en/docs/cli/create/)
*   [https://docs.npmjs.com/cli/init](https://docs.npmjs.com/cli/init)

## NPX cache

```
~/.npm/_npx
```

### Related content:

*   [.bash\_profile](bash-profile.html)
