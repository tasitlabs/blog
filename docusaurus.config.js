module.exports = {
  title: 'Tasit blog',
  tagline: 'A JavaScript / TypeScript SDK for building native mobile Ethereum dapps with React Native',
  url: 'https://blog.tasit.io',
  baseUrl: '/',
  favicon: 'img/favicon-32x32.png',
  organizationName: 'tasitlabs', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Tasit',
      logo: {
        alt: 'Tasit logo',
        src: 'img/TasitLogoSvg.svg',
      },
      links: [
        {to: 'posts', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/tasitlabs/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: "Tech",
          items: [
            {
              label: "Docs",
              href: "https://docs.tasit.io",
            },
            {
              label: "Roadmap",
              href: "https://github.com/orgs/tasitlabs/projects/1",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Telegram",
              href: "https://t.me/tasitproject",
            },
            {
              label: "Discord",
              href: "https://discord.gg/bRp4QKq",
            },
            {
              label: "Feature requests",
              href: "http://feedback.tasit.io/feature-requests",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/TasitProject",
            },
            {
              label: "Medium",
              href: "https://medium.com/tasit",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tasit Labs`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          showReadingTime: true,
          path: './blog',
          routeBasePath: '/posts', // Set this value to '/'.
          editUrl:
            'https://github.com/tasitlabs/blog/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
