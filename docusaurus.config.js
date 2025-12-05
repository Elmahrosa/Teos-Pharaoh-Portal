// docusaurus.config.js
const config = {
  title: 'Teos Pharaoh Portal',
  tagline: 'Comprehensive documentation for the TEOS ecosystem',
  url: 'https://your-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'Elmahrosa',
  projectName: 'Teos-Pharaoh-Portal',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/Elmahrosa/Teos-Pharaoh-Portal/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

module.exports = config;
