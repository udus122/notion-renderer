import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

import Bold from "./Bold";
import boldRichText from "./Bold.json";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Bold> = {
  title: "RichTexts/Annotation/Bold",
  component: Bold,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Bold>;

export const Default: Story = {
  args: {
    richTextItem: boldRichText as RichTextItemResponse,
    children: "This is bold text",
  },
};
