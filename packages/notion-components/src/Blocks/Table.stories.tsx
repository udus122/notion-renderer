import { Table } from "./Table";
import TableObject from "./Table.json";

import type { TableBlockObject } from "@udus/notion-types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Table> = {
  title: "Blocks/Table",
  component: Table,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    block: TableObject as TableBlockObject,
  },
};
