import { TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

import TextObject from "./index.json";

import { Text } from "./index";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Text> = {
  title: "RichText/Text",
  component: Text,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    richTextItem: TextObject as TextRichTextItemResponse,
  },
};
