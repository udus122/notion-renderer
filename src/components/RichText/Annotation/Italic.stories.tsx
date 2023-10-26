import { Italic } from "./Italic.js";
import italicRichText from "./Italic.json";

import type { Meta, StoryObj } from "@storybook/react";
import type { RichTextItem } from "../../../types/notion.js";

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
