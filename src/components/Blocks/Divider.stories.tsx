import { Divider } from "./Divider";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Divider> = {
  title: "Blocks/Divider",
  component: Divider,
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {},
};
