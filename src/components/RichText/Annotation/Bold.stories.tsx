import { Bold } from "./Bold.js";
import boldRichText from "./Bold.json";

import type { Meta, StoryObj } from "@storybook/react";
import type { RichTextItem } from "@udus/notion-libs";

const meta: Meta<typeof Bold> = {
  title: "Annotation/Bold",
  component: Bold,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Bold>;

export const Default: Story = {
  args: {
    richTextItem: boldRichText as RichTextItem,
    children: "This is bold text",
  },
};
