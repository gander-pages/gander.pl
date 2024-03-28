// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import Footer from "./Footer.vue";

export default {
    extends: DefaultTheme,
    Layout: Footer,
};
