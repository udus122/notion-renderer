import { ChildPage } from "./ChildPage";
import ChildPageObject from "./ChildPage.json";

import type { ChildPageBlockObjectComponent } from "@/types/components";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ChildPage> = {
  title: "Blocks/ChildPage",
  component: ChildPage,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ChildPage>;

export const Default: Story = {
  args: {
    block: ChildPageObject as ChildPageBlockObjectComponent,
  },
};
