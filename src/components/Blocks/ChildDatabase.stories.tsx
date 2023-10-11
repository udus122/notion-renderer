import ChildDatabase from "./ChildDatabase";
import ChildDatabaseObject from "./ChildDatabase.json";

import type { ChildDatabaseBlockObjectComponent } from "@/types/components";
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
    block: ChildDatabaseObject as ChildDatabaseBlockObjectComponent,
  },
};
