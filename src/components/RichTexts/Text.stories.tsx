import { TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

import Text from "./Text";
import TextObject from "./Text.json";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Text> = {
  title: "RichTexts/Text",
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