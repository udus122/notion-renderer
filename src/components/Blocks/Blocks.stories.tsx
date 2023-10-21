import { Blocks } from "./Blocks.js";
import BlocksObject from "./Blocks.json";
import { OpenedHeading1 } from "./Custom/OpenedHeading1.js";
import { OpenedHeading2 } from "./Custom/OpenedHeading2.js";
import { OpenedHeading3 } from "./Custom/OpenedHeading3.js";
import { OpenedToggle } from "./Custom/OpenedToggle.js";

import type { BlockObject } from "./Block.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Blocks> = {
  title: "Blocks",
  component: Blocks,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Blocks>;

export const Default: Story = {
  args: {
    blocks: BlocksObject as Array<BlockObject>,
  },
};

export const Custom: Story = {
  args: {
    blocks: BlocksObject as Array<BlockObject>,
    blockMapper: {
      toggle: OpenedToggle,
      heading_1: OpenedHeading1,
      heading_2: OpenedHeading2,
      heading_3: OpenedHeading3,
    },
  },
};
