import EquationRichTextObject from "./RichTextItem.equation.json";
import { RichTextItem } from "./RichTextItem.js";
import MentionRichTextObject from "./RichTextItem.mention.json";
import TextRichTextObject from "./RichTextItem.text.json";

import type {
  TextRichTextItemResponse,
  MentionRichTextItemResponse,
  EquationRichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RichTextItem> = {
  title: "RichText/RichTextItem",
  component: RichTextItem,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RichTextItem>;

export const Text: Story = {
  args: {
    richTextItem: TextRichTextObject as TextRichTextItemResponse,
  },
};
export const Mention: Story = {
  args: {
    richTextItem: MentionRichTextObject as MentionRichTextItemResponse,
  },
};
export const Equation: Story = {
  args: {
    richTextItem: EquationRichTextObject as EquationRichTextItemResponse,
  },
};
