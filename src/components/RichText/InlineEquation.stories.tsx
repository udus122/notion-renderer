import { InlineEquation } from "./InlineEquation.js";
import InlineEquationObject from "./InlineEquation.json";

import type { EquationRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";
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
    richTextItem: InlineEquationObject as EquationRichTextItemResponse,
  },
};
