import { ChildDatabase } from "./ChildDatabase.js";
import ChildDatabaseObject from "./ChildDatabase.json";

import type { Meta, StoryObj } from "@storybook/react";
import type { ChildDatabaseBlockObject } from "../../types/notion.js";

const meta: Meta<typeof ChildDatabase> = {
  title: "Blocks/ChildDatabase",
  component: ChildDatabase,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ChildDatabase>;

export const Default: Story = {
  args: {
    block: ChildDatabaseObject as ChildDatabaseBlockObject,
  },
};
