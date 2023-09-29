import {
  TextRichTextItemResponse,
  MentionRichTextItemResponse,
  EquationRichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";

import RichText from "./RichText";
import EquationRichTextObject from "./RichText.equation.json";
import MentionRichTextObject from "./RichText.mention.json";
import TextRichTextObject from "./RichText.text.json";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RichText> = {
  title: "RichTexts/RichText",
  component: RichText,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RichText>;

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
