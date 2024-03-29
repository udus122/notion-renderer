import { BlockList } from "./BlockList.js";
import BlocksObject from "./BlockList.json";

import type { BlockBlockObject } from "../../types/notion/block/block.js";
import type { Meta, StoryObj } from "@storybook/react";

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
