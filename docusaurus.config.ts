import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Weights Docs",
  tagline: "Documentation & FAQ's for Weights and Replay",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.weights.gg/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/", // Serve the docs at the site's root
        },
        blog: false,

        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/weights_logo.png",
    navbar: {
      title: "Weights Docs",
      logo: {
        alt: "Weights Logo",
        src: "img/weights_logo.png",
      },
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discordapp.com/invite/weights",
            },
          ],
        },
        {
          title: "Our Apps",
          items: [
            {
              label: "Weights",
              href: "https://weights.gg",
            },
            {
              label: "Replay",
              href: "https://tryreplay.io",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Weights`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
