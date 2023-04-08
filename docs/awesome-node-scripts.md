# Awesome Node.js Scripts

*   Promise **sleep**

        const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

        (async () => {
        await sleep(1000);
        })();

        sleep(1000).then(() => console.log('Do something after 1s'));


[« How to connect to VPN with CLI password prompting](how-to-connect-to-vpn-with-cli-password-prompting.html)

[Linux Mint 20 NVIDIA Driver »](linux-mint-20-nvidia-driver.html)


