import { LinkToPage } from "./LinkToPage.js";
import LinkToPageObject from "./LinkToPage.json";

import type { Meta, StoryObj } from "@storybook/react";
import type { LinkToPageBlockObject } from "src/libs/notion/blocks/linkToPage.js";

const meta: Meta<typeof LinkToPage> = {
  title: "Blocks/LinkToPage",
  component: LinkToPage,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof LinkToPage>;

export const Default: Story = {
  args: {
    block: LinkToPageObject as LinkToPageBlockObject,
  },
};
