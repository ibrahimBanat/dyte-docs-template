const code_themes = {
    light: require('prism-react-renderer/themes/github'),
    dark: require('prism-react-renderer/themes/vsDark'),
};

/** @type {import('@docusaurus/types').Config} */
const meta = {
    title: "your title",
    baseUrl: '/',
    url: "https://docs.altibb.com",
    favicon: '/favicon.ico',
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
};


const { webpackPlugin } = require('./plugins/webpack-plugin.cjs');
const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');

const plugins = [
    tailwindPlugin,
    webpackPlugin,
];


/** @type {import('@docusaurus/types').Config} */
const config = {
    ...meta,
    plugins,

    trailingSlash: false,
    themes: ['@docusaurus/theme-live-codeblock'],
    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                blog: false,
                theme: {
                    customCss: [
                        require.resolve('./src/css/custom.css'),
                    ],
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            image: '/img/dyte-docs-card.png',
            colorMode: {
                defaultMode: 'light',
            },
            docs: {
                sidebar: {
                    autoCollapseCategories: true,
                    hideable: true,
                },
            },
            navbar: {
                logo: {
                    href: '/',
                    src: '/logo/light.svg',
                    srcDark: '/logo/dark.svg',
                    alt: 'Dyte Docs',
                    height: '40px',
                    width: '101px',
                },
                items: [
                    {
                        label: 'Guides',
                        to: '/docs/guides',
                        className: 'guides-top-header',
                    },
                ],
            },
            prism: {
                theme: code_themes.light,
                darkTheme: code_themes.dark,
                additionalLanguages: [
                    'dart',
                    'ruby',
                    'groovy',
                    'kotlin',
                    'java',
                    'swift',
                    'objectivec',
                ],
                magicComments: [
                    {
                        className: 'theme-code-block-highlighted-line',
                        line: 'highlight-next-line',
                        block: { start: 'highlight-start', end: 'highlight-end' },
                    },
                    {
                        className: 'code-block-error-line',
                        line: 'highlight-next-line-error',
                    },
                ],
            },
            algolia: false
        }),

    webpack: {
        jsLoader: (isServer) => ({
            loader: require.resolve('swc-loader'),
            options: {
                jsc: {
                    parser: {
                        syntax: 'typescript',
                        tsx: true,
                    },
                    target: 'es2017',
                },
                module: {
                    type: isServer ? 'commonjs' : 'es6',
                },
            },
        }),
    },
    onBrokenLinks: 'warn'
};

module.exports = config;
