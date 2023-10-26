import { InlineEquation } from "./InlineEquation.js";
import InlineEquationObject from "./InlineEquation.json";

import type { Meta, StoryObj } from "@storybook/react";
import type { EquationRichTextItem } from "src/types/notion/richText/equation.js";

const meta: Meta<typeof InlineEquation> = {
  title: "RichText/InlineEquation",
  component: InlineEquation,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof InlineEquation>;

export const Default: Story = {
  args: {
    richText: InlineEquationObject as EquationRichTextItem,
  },
};
