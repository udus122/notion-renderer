import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

import { Strikethrough } from "./Strikethrough";
import StrikethroughRichText from "./Strikethrough.json";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Strikethrough> = {
  title: "RichText/Annotation/Strikethrough",
  component: Strikethrough,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Strikethrough>;

export const Default: Story = {
  args: {
    richTextItem: StrikethroughRichText as RichTextItemResponse,
    children: "This is Strikethrough text",
  },
};
