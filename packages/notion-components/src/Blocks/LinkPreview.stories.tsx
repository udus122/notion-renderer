import { LinkPreview } from "./LinkPreview";
import LinkPreviewObject from "./LinkPreview.json";

import type { LinkPreviewBlockObject } from "@udus/notion-types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LinkPreview> = {
  title: "Blocks/LinkPreview",
  component: LinkPreview,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof LinkPreview>;

export const Default: Story = {
  args: {
    block: LinkPreviewObject as unknown as LinkPreviewBlockObject,
  },
};
