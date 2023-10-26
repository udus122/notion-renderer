import { InlineCode } from "./InlineCode.js";
import inlineCodeRichText from "./InlineCode.json";

import type { Meta, StoryObj } from "@storybook/react";
import type { RichTextItem } from "../../../types/notion.js";

const meta: Meta<typeof InlineCode> = {
  title: "Annotation/InlineCode",
  component: InlineCode,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof InlineCode>;

export const Default: Story = {
  args: {
    richTextItem: inlineCodeRichText as RichTextItem,
    children: "This is InlineCode text",
  },
};
