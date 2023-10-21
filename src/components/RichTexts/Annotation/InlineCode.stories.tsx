import { InlineCode } from "./InlineCode.js";
import inlineCodeRichText from "./InlineCode.json";

import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InlineCode> = {
  title: "RichTexts/InlineCode",
  component: InlineCode,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof InlineCode>;

export const Default: Story = {
  args: {
    richTextItem: inlineCodeRichText as RichTextItemResponse,
    children: "This is InlineCode text",
  },
};
