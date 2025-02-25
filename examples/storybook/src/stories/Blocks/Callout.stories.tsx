import { Callout } from "@udus/notion-components";
import CalloutObject from "./Callout.json";

import type { CalloutBlockObject } from "@udus/notion-types";
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
