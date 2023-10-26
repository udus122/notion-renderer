import { Equation } from "./Equation.js";
import InlineEquationObject from "./Equation.json";

import type { EquationRichTextItemObject } from "../../types/notion/richText/equation.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Equation> = {
  title: "RichText/InlineEquation",
  component: Equation,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Equation>;

export const Default: Story = {
  args: {
    richText: InlineEquationObject as EquationRichTextItemObject,
  },
};
