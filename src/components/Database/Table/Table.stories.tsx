import Database from "../Database.json";
import Pages from "../Pages.json";

import { Table } from "./Table.js";

import type { DatabaseObject } from "../../../types/notion/database.js";
import type { PageObject } from "../../../types/notion/pages/page.js";
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
