import { Text } from "./Text.js";
import TextObject from "./Text.json";

import type { TextRichTextItemObject } from "../../types/notion/richText/text.js";
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
    richText: TextObject as TextRichTextItemObject,
  },
};
