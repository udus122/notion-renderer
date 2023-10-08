import Callout from "./Callout";
import CalloutObject from "./Callout.json";

import type { CalloutBlockObjectComponent } from "@/types/components";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Callout> = {
  title: "Blocks/Callout",
  component: Callout,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Callout>;

export const Default: Story = {
  args: {
    block: CalloutObject as CalloutBlockObjectComponent,
  },
};
