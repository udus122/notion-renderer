import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

import { Bold } from "./Bold";
import blodRichText from "./Bold.json";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Bold> = {
  title: "RichText/Annotation/Bold",
  component: Bold,
};

export default meta;

type Story = StoryObj<typeof Bold>;

export const Default: Story = {
  args: {
    richTextItem: blodRichText as RichTextItemResponse,
    children: "This is bold text",
  },
};
