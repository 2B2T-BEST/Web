// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '2B2T.BEST 无规则服官网',
  tagline: '我们致力于打造最好的无规则服务器！网站正在建设中，敬请期待！',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.2b2t.best/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '2B2T-BEST', // Usually your GitHub org/user name.
  projectName: 'Website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/2B2T-BEST/Website/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '2B2T.BEST 无规则服',
        logo: {
          alt: '2B2T.BEST Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '教程文档',
          },
          {
            href: 'https://bbs.2b2t.best',
            label: '论坛',
            position: 'left',
          },
          {
            href: 'https://qm.qq.com/q/XtqnjjuUkE',
            label: 'QQ群',
            position: 'left',
          },
          {
            href: 'https://github.com/2B2T-BEST/Website',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '帮助中心',
            items: [
              {
                label: '教程文档',
                to: '/docs/intro',
              },
              {
                label: 'QQ群',
                href: 'https://qm.qq.com/q/XtqnjjuUkE',
              },
              {
                label: '意见反馈',
                href: 'https://bbs.2b2t.best/forums/feedback/',
              },
            ],
          },
          {
            title: '交流平台',
            items: [
              {
                label: 'QQ群',
                href: 'https://qm.qq.com/q/XtqnjjuUkE',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/rYGQuyNbhU/',
              },
              {
                label: 'KOOK',
                href: 'https://kook.vip/kwnu0n',
              },
            ],
          },
          {
            title: '相关链接',
            items: [
              {
                label: '哔哩哔哩',
                href: 'https://space.bilibili.com/1681111941',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/2B2T-BEST',
              },
              {
                label: '创世极客工作室',
                href: 'https://hiworldmc.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © 2023-${new Date().getFullYear()} 2B2T.BEST. All rights reserved. <br>Powered by <a href="https://hiworldmc.com/">HiWorldMC</a>.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
