// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Shinjini Mondal',
  tagline: 'Marketing & PR Professional',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://shinjini-m-portfolio.netlify.app',
  baseUrl: '/',

  organizationName: 'shinjini16',
  projectName: 'portfolio',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'ignore',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Shinjini Mondal',
        logo: {
          alt: 'SM',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/', label: 'Home', position: 'right'},
          {to: '/resume', label: 'Resume', position: 'right'},
          {to: '/work', label: 'Work', position: 'right'},
          {to: '/contact', label: 'Contact', position: 'right'},
          {
            href: 'mailto:shinjinimondal@outlook.com',
            label: 'Hire Me ↗',
            position: 'right',
            className: 'hireButton',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Shinjini Mondal.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
