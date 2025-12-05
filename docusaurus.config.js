// docusaurus.config.js
// Docs: https://docusaurus.io/docs/configuration
import { defineConfig } from 'docusaurus';

export default defineConfig({
  title: 'Teos Pharaoh Portal',
  tagline: 'Comprehensive documentation for the TEOS ecosystem',
  url: 'https://your-site.com',  // Replace with your site URL
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico', // Place a favicon in /static/img/

  // GitHub pages deployment config
  organizationName: 'Elmahrosa', // Your GitHub org/user name
  projectName: 'Teos-Pharaoh-Portal', // Repo name

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/Elmahrosa/Teos-Pharaoh-Portal/edit/main/',
        },
        blog: false, // Disable blog if not needed
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
});
