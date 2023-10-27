import { InlineCode } from "./InlineCode.js";
import codeRichText from "./InlineCode.json";

import type { RichTextItem } from "../../../types/notion/richText/richTextItem.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InlineCode> = {
  title: "Annotation/InlineCode",
  component: InlineCode,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof InlineCode>;

export const Default: Story = {
  args: {
    richTextItem: codeRichText as RichTextItem,
    children: "This is InlineCode text",
  },
};
