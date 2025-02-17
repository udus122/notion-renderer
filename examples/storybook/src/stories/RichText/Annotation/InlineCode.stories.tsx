import { InlineCode } from "@udus/notion-components";
import codeRichText from "./InlineCode.json";

import type { RichTextItemType } from "@udus/notion-types";
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
    richTextItem: codeRichText as RichTextItemType,
    children: "This is InlineCode text",
  },
};
