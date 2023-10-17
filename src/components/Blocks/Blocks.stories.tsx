import { Blocks } from "./Blocks";
import BlocksObject from "./Blocks.json";

import type { BlockObjectComponent } from "@/types/components";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Blocks> = {
  title: "Blocks/Blocks",
  component: Blocks,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Blocks>;

export const Default: Story = {
  args: {
    blocks: BlocksObject as Array<BlockObjectComponent>,
  },
};
