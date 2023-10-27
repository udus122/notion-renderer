import { BlockList } from "./BlockList.js";
import BlocksObject from "./BlockList.json";

import type { Meta, StoryObj } from "@storybook/react";
import type { BlockBlockObject } from "src/types/notion/blocks/block.js";

const meta: Meta<typeof BlockList> = {
  title: "Blocks",
  component: BlockList,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BlockList>;

export const Default: Story = {
  args: {
    blocks: BlocksObject as Array<BlockBlockObject>,
  },
};
