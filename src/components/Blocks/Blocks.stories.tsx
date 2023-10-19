import { OpenedHeading1 } from "../CustomBlocks/OpenedHeading1.js";
import { OpenedHeading2 } from "../CustomBlocks/OpenedHeading2.js";
import { OpenedHeading3 } from "../CustomBlocks/OpenedHeading3.js";
import { OpenedToggle } from "../CustomBlocks/OpenedToggle.js";

import { Blocks } from "./Blocks.js";
import BlocksObject from "./Blocks.json";

import type { BlockObjectComponent } from "../../types/components.js";
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

export const Custom: Story = {
  args: {
    blocks: BlocksObject as Array<BlockObjectComponent>,
    mapper: {
      toggle: OpenedToggle,
      heading_1: OpenedHeading1,
      heading_2: OpenedHeading2,
      heading_3: OpenedHeading3,
    },
  },
};
