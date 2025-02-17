import { BlockList } from "./BlockList";
import BlocksObject from "./BlockList.json";

import type { BlockBlockObject } from "@udus/notion-types";
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
