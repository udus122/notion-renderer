import { Equation } from "./Equation";
import EquationObject from "./Equation.json";

import type { EquationRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Equation> = {
  title: "RichTexts/Equation",
  component: Equation,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Equation>;

export const Default: Story = {
  args: {
    richTextItem: EquationObject as EquationRichTextItemResponse,
  },
};
