import { Strikethrough } from "./Strikethrough.js";
import StrikethroughRichText from "./Strikethrough.json";

import type { Meta, StoryObj } from "@storybook/react";
import type { RichTextItem } from "../../../types/notion.js";

const meta: Meta<typeof Strikethrough> = {
  title: "Annotation/Strikethrough",
  component: Strikethrough,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Strikethrough>;

export const Default: Story = {
  args: {
    richTextItem: StrikethroughRichText as RichTextItem,
    children: "This is Strikethrough text",
  },
};
