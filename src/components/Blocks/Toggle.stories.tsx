import { Toggle } from "./Toggle.js";
import ToggleObject from "./Toggle.json";

import type { ToggleBlockObject } from "../../types/components.js";
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
