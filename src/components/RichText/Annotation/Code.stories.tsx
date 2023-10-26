import { Code } from "./Code.js";
import codeRichText from "./Code.json";

import type { RichTextItem } from "../../../types/notion/richText/richTextItem.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Code> = {
  title: "Annotation/InlineCode",
  component: Code,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Code>;

export const Default: Story = {
  args: {
    richTextItem: codeRichText as RichTextItem,
    children: "This is InlineCode text",
  },
};
