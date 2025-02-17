import { Text } from "./Text";
import TextObject from "./Text.json";

import type { TextRichTextItemObject } from "@udus/notion-types";
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
