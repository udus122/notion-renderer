import { NumberedList } from "@udus/notion-components";
import NumberedListObject from "./NumberedList.json";

import type { NumberedListBlockObject } from "@udus/notion-types";
import type { Meta, StoryObj } from "@storybook/react";

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
