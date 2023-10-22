import { RichText } from "./RichText.js";
import RichTextObject from "./RichText.json";

import type { Meta, StoryObj } from "@storybook/react";
import type { RichTextItem } from "src/libs/notion/richText/richTextItem.js";

const meta: Meta<typeof RichText> = {
  title: "RichText",
  component: RichText,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RichText>;

export const Default: Story = {
  args: {
    richTextItems: RichTextObject as RichTextItem[],
  },
};
