import { Bold } from "./Bold.js";
import boldRichText from "./Bold.json";

import type { RichTextItem } from "src/types/notion/richText/richTextItem.js";
import type { Meta, StoryObj } from "@storybook/react";

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
