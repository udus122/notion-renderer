import { Callout } from "./Callout.js";
import CalloutObject from "./Callout.json";

import type { CalloutBlockObject } from "../../types/components.js";
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
    block: CalloutObject as CalloutBlockObject,
  },
};
