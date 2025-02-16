import { ChildDatabase } from "./ChildDatabase.js";
import ChildDatabaseObject from "./ChildDatabase.json";

import type { ChildDatabaseBlockObject } from "../../types/notion/block/childDatabase.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ChildDatabase> = {
  title: "Blocks/ChildDatabase",
  component: ChildDatabase,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ChildDatabase>;

export const Default: Story = {
  args: {
    block: ChildDatabaseObject as unknown as ChildDatabaseBlockObject,
  },
};
