import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

import RichTextObject from "./index.json";

import { RichText } from "./index";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RichText> = {
  title: "RichText",
  component: RichText,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RichText>;

export const Default: Story = {
  args: {
    richText: RichTextObject as RichTextItemResponse[],
  },
};
