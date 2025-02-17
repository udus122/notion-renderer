import Database from "../Database.json";
import Pages from "../Pages.json";

import { Table } from "./Table";

import type { DatabaseObject, PageObject } from "@udus/notion-types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Table> = {
  title: "Database/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    database: Database as unknown as DatabaseObject,
    pages: Pages as unknown as PageObject[],
  },
};
