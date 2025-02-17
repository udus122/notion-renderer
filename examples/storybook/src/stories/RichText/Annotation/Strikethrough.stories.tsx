import { Strikethrough } from "@udus/notion-components";
import StrikethroughRichText from "./Strikethrough.json";

import type { RichTextItemType } from "@udus/notion-types";
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
