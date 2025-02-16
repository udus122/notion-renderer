import { Strikethrough } from "./Strikethrough.js";
import StrikethroughRichText from "./Strikethrough.json";

import type { RichTextItemType } from "../../../types/notion/richText/richTextItem.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Strikethrough> = {
  title: "Annotation/Strikethrough",
  component: Strikethrough,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Strikethrough>;

export const Default: Story = {
  args: {
    richTextItem: StrikethroughRichText as RichTextItemType,
    children: "This is Strikethrough text",
  },
};
