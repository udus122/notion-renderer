import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-console",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  core: {
    disableWhatsNewNotifications: true,
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      build: {
        rollupOptions: {
          entryFileNames: `[name].js`,
          chunkFileNames: `[name].js`,
          assetFileNames: `assets/[name].[ext]`,
        },
      },
    });
  },
};

export default config;
