import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

import { Italic } from "./Italic";
import italicRichText from "./Italic.json";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Italic> = {
  title: "RichTexts/Italic",
  component: Italic,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Italic>;

export const Default: Story = {
  args: {
    richTextItem: italicRichText as RichTextItemResponse,
    children: "This is italic text",
  },
};
