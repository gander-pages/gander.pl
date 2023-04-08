# yargs

    npm install yargs @types/yargs

    const yargs = require('yargs/yargs');

    // or:

    import yargs from 'yargs/yargs';

    const argv = yargs(process.argv.slice(2)).option('o', {
        alias: 'option', type: 'boolean', default: false
    }).argv;

    // or:

    const argv = yargs(process.argv.slice(2)).options({
        o: {alias: 'option', type: 'boolean', default: false}
    }).argv;


[yargs docs](https://github.com/yargs/yargs/tree/master/docs)

[« How to resolve SAOError when using create-nuxt-app](how-to-resolve-saoerror-when-using-create-nuxt-app.html)

[Signal Desktop Tray Icon »](signal-desktop-tray-icon.html)


