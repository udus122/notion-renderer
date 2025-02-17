import { Bold } from "./Bold";
import boldRichText from "./Bold.json";

import type { RichTextItemType } from "@udus/notion-types";
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
    richTextItem: boldRichText as RichTextItemType,
    children: "This is bold text",
  },
};
