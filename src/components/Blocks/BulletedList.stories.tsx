import { type BulletedListBlockObject } from "src/libs/notion/blocks/bulletedListItem.js";

import { BulletedList } from "./BulletedList.js";
import BulletedListObject from "./BulletedList.json";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BulletedList> = {
  title: "Blocks/BulletedList",
  component: BulletedList,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BulletedList>;

export const Default: Story = {
  args: {
    block: BulletedListObject as BulletedListBlockObject,
  },
};
