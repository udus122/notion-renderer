import BlocksObject from "./BlockList.json";
import { BlockRenderer } from "./Blocks.js";
import { OpenedHeading1 } from "./Custom/OpenedHeading1.js";
import { OpenedHeading2 } from "./Custom/OpenedHeading2.js";
import { OpenedHeading3 } from "./Custom/OpenedHeading3.js";
import { OpenedToggle } from "./Custom/OpenedToggle.js";

import type { BlockBlockObject } from "../../types/notion/block/block.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BlockRenderer> = {
  title: "Blocks/Renderer",
  component: BlockRenderer,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BlockRenderer>;

export const Default: Story = {
  args: {
    blocks: BlocksObject as Array<BlockBlockObject>,
  },
};
export const Dark: Story = {
  args: {
    blocks: BlocksObject as Array<BlockBlockObject>,
    theme: "dark",
  },
};

export const Custom: Story = {
  args: {
    blocks: BlocksObject as Array<BlockBlockObject>,
    blockMapper: {
      toggle: OpenedToggle,
      heading_1: OpenedHeading1,
      heading_2: OpenedHeading2,
      heading_3: OpenedHeading3,
    },
  },
};
