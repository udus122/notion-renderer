import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

import { InlineCode } from "./InlineCode";
import inlineCodeRichText from "./InlineCode.json";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InlineCode> = {
  title: "RichText/Annotation/InlineCode",
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
