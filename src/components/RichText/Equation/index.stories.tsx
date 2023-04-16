import { EquationRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

import InlineEquationObject from "./index.json";

import { Equation } from "./index";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Equation> = {
  title: "RichText/Equation",
  component: Equation,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Equation>;

export const Default: Story = {
  args: {
    richTextItem: InlineEquationObject as EquationRichTextItemResponse,
  },
};
