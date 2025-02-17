import { Toggle } from "./Toggle";
import ToggleObject from "./Toggle.json";

import type { ToggleBlockObject } from "@udus/notion-types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Toggle> = {
  title: "Blocks/Toggle",
  component: Toggle,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    block: ToggleObject as ToggleBlockObject,
  },
};
