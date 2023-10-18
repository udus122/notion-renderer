import { Equation } from "./Equation.js";
import EquationObject from "./Equation.json";

import type { EquationBlockObjectComponent } from "../../types/components.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Equation> = {
  title: "Blocks/Equation",
  component: Equation,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Equation>;

export const Default: Story = {
  args: {
    block: EquationObject as EquationBlockObjectComponent,
  },
};
