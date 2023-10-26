import EquationRichTextObject from "./RichTextItem.equation.json";
import { RichTextItem } from "./RichTextItem.js";
import MentionRichTextObject from "./RichTextItem.mention.json";
import TextRichTextObject from "./RichTextItem.text.json";

import type { EquationRichTextItemObject } from "../../types/notion/richText/equation.js";
import type { MentionRichTextItemObject } from "../../types/notion/richText/mention.js";
import type { TextRichTextItemObject } from "../../types/notion/richText/text.js";
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
    richText: TextRichTextObject as TextRichTextItemObject,
  },
};
export const Mention: Story = {
  args: {
    richText: MentionRichTextObject as MentionRichTextItemObject,
  },
};
export const Equation: Story = {
  args: {
    richText: EquationRichTextObject as EquationRichTextItemObject,
  },
};
