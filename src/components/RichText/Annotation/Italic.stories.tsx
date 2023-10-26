import { Italic } from "./Italic.js";
import italicRichText from "./Italic.json";

import type { RichTextItem } from "../../../types/notion/richText/richTextItem.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Italic> = {
  title: "Annotation/Italic",
  component: Italic,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Italic>;

export const Default: Story = {
  args: {
    richTextItem: italicRichText as RichTextItem,
    children: "This is italic text",
  },
};
