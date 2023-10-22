import { NumberedList } from "./NumberedList.js";
import NumberedListObject from "./NumberedList.json";

import type { Meta, StoryObj } from "@storybook/react";
import type { NumberedListBlockObject } from "src/libs/notion/blocks/numberedListItem.js";

const meta: Meta<typeof NumberedList> = {
  title: "Blocks/NumberedList",
  component: NumberedList,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NumberedList>;

export const Default: Story = {
  args: {
    block: NumberedListObject as NumberedListBlockObject,
  },
};
