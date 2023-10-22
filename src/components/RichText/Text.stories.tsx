import { Text } from "./Text.js";
import TextObject from "./Text.json";

import type { Meta, StoryObj } from "@storybook/react";
import type { TextRichTextItem } from "src/libs/notion/richText/text.js";

const meta: Meta<typeof Text> = {
  title: "RichText/Text",
  component: Text,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    richTextItem: TextObject as TextRichTextItem,
  },
};
