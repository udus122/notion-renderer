import BlocksObject from "./index.json";

import Blocks from "./index";

import type { Meta, StoryObj } from "@storybook/react";
import type { ListBlockChildrenResponseEx } from "notionate";

const meta: Meta<typeof Blocks> = {
  title: "Blocks/Blocks",
  component: Blocks,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Blocks>;

export const Default: Story = {
  args: {
    blocks: BlocksObject as ListBlockChildrenResponseEx,
  },
};
