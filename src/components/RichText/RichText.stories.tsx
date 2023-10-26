import { RichText } from "./RichText.js";
import RichTextObject from "./RichText.json";

import type { RichTextItem } from "../../types/notion/richText/richTextItem.js";
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
    richText: RichTextObject as RichTextItem[],
  },
};
