import ColumnList from "./ColumnList";
import ColumnListObject from "./ColumnList.json";

import type { ColumnListComponentBlockObject } from "@/types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ColumnList> = {
  title: "Blocks/ColumnList",
  component: ColumnList,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ColumnList>;

export const Default: Story = {
  args: {
    block: ColumnListObject as ColumnListComponentBlockObject,
  },
};
