import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

import { Underline } from "./Underline";
import UnderlineRichText from "./Underline.json";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Underline> = {
  title: "RichText/Annotation/Underline",
  component: Underline,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Underline>;

export const Default: Story = {
  args: {
    richTextItem: UnderlineRichText as RichTextItemResponse,
    children: "This is underline text",
  },
};
