import { Italic } from "./Italic";
import italicRichText from "./Italic.json";

import type { RichTextItemType } from "@udus/notion-types";
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
    richTextItem: italicRichText as RichTextItemType,
    children: "This is italic text",
  },
};
