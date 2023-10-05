import BulletedList from "./BulletedList";
import BulletedListObject from "./BulletedList.json";

import type { BulletedListComponentBlockObject } from "@/types";
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
    block: BulletedListObject as BulletedListComponentBlockObject,
  },
};
