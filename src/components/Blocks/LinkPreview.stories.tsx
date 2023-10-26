import { LinkPreview } from "./LinkPreview.js";
import LinkPreviewObject from "./LinkPreview.json";

import type { Meta, StoryObj } from "@storybook/react";
import type { LinkPreviewBlockObject } from "../../types/notion.js";

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
