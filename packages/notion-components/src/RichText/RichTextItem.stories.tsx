import EquationRichTextObject from "./RichTextItem.equation.json";
import { RichTextItem } from "./RichTextItem";
import MentionRichTextObject from "./RichTextItem.mention.json";
import TextRichTextObject from "./RichTextItem.text.json";

import type { EquationRichTextItemObject } from "@udus/notion-types";
import type { MentionRichTextItemObject } from "@udus/notion-types";
import type { TextRichTextItemObject } from "@udus/notion-types";
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
