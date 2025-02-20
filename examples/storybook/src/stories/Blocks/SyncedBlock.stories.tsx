import SyncedBlockDuplicatedObject from "./SyncedBlock.Duplicated.json";
import { SyncedBlock } from "@udus/notion-components";
import SyncedBlockOriginalObject from "./SyncedBlock.Original.json";

import type { SyncedBlockBlockObject } from "@udus/notion-types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SyncedBlock> = {
  title: "Blocks/SyncedBlock",
  component: SyncedBlock,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SyncedBlock>;

export const Default: Story = {
  args: {
    block: SyncedBlockOriginalObject as SyncedBlockBlockObject,
  },
};

export const Original: Story = {
  args: {
    block: SyncedBlockOriginalObject as SyncedBlockBlockObject,
  },
};

export const Duplicated: Story = {
  args: {
    block: SyncedBlockDuplicatedObject as unknown as SyncedBlockBlockObject,
  },
};
