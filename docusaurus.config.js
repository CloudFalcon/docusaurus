const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "CloudFalcon",
  tagline: "Automated production-grade IaC deployments on AWS",
  url: "https://cloudfalcon.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "cloudfalcon", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    googleAnalytics: {
      trackingID: "G-WTR4CERZPM",
      anonymizeIP: false,
    },
    navbar: {
      title: "CF",
      logo: {
        alt: "CF",
        src: "img/logo/cf_logo_transparent.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        // { to: "/links", label: "Links", position: "left" },
        { to: "/services", label: "Services", position: "left" },
        // { to: "/podcasts", label: "Podcasts", position: "left" },
        // { to: "/workshops", label: "Workshops", position: "left" },
        // { to: "/slides", label: "Slides", position: "left" },
        { to: "/team", label: "Team", position: "left" },
        {
          href: "https://github.com/cloudfalcon/",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/cloudfalcon",
            },
            // {
            //   label: "Stack Overflow",
            //   href: "https://stackoverflow.com/questions/tagged/docusaurus",
            // },
            // {
            //   label: "Discord",
            //   href: "https://discordapp.com/invite/docusaurus",
            // },
            // {
            //   label: "Twitter",
            //   href: "https://twitter.com/docusaurus",
            // },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/cloudfalcon/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CloudFalcon.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/cloudfalcon/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/cloudfalcon/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
