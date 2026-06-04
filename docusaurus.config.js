// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Youcef Boualili',
  tagline: 'DevSecOps, Cloud Security and Kubernetes portfolio',
  favicon: 'img/profile/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://youcefboualili.vercel.app',
  baseUrl: '/',

  organizationName: 'Boualili-Youcef',
  projectName: 'portfolio',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    localeConfigs: {
      fr: {
        label: 'Français',
        htmlLang: 'fr-FR',
      },
      en: {
        label: 'English',
        htmlLang: 'en-US',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
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
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      image: 'img/profile/social-card.jpg',
      navbar: {
        title: 'Youcef Boualili',
        logo: {
          alt: 'Youcef Boualili',
          src: 'img/profile/favicon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'labsSidebar',
            position: 'left',
            label: 'Labs',
          },
          {to: '/about', label: 'À propos', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/Boualili-Youcef',
            position: 'right',
            className: 'header-social-link header-github-link',
            'aria-label': 'GitHub',
          },
          {
            href: 'https://linkedin.com/in/youcef-boualili',
            position: 'right',
            className: 'header-social-link header-linkedin-link',
            'aria-label': 'LinkedIn',
          },
          {
            href: 'mailto:youcefboualili0@gmail.com',
            position: 'right',
            className: 'header-social-link header-email-link',
            'aria-label': 'Email',
          },
          {
            type: 'custom-languageSwitcher',
            position: 'right',
            className: 'header-language-switcher',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Portfolio',
            items: [
              {
                label: 'Accueil',
                to: '/',
              },
              {
                label: 'Labs',
                to: '/docs/labs',
              },
              {
                label: 'À propos',
                to: '/about',
              },
            ],
          },
          {
            title: 'Focus technique',
            items: [
              {
                label: 'Kubernetes Security',
                href: 'https://github.com/Boualili-Youcef/k8s-sec-lab',
              },
              {
                label: 'Cloud Security',
                href: 'https://github.com/Boualili-Youcef/CloudSecVision',
              },
              {
                label: 'Secure Backend',
                href: 'https://github.com/Boualili-Youcef/secure-card-vault-poc',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/youcef-boualili',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Boualili-Youcef',
              },
              {
                label: 'Email',
                href: 'mailto:youcefboualili0@gmail.com',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Youcef Boualili. Portfolio DevSecOps & Cloud Security.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
