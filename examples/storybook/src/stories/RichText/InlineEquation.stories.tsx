import { InlineEquation } from "@udus/notion-components";
import InlineEquationObject from "./InlineEquation.json";

import type { EquationRichTextItemObject } from "@udus/notion-types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InlineEquation> = {
  title: "RichText/InlineEquation",
  component: InlineEquation,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof InlineEquation>;

export const Default: Story = {
  args: {
    richText: InlineEquationObject as EquationRichTextItemObject,
  },
};
