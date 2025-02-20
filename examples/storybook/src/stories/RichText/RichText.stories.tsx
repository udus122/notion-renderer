import { RichText } from "@udus/notion-components";
import RichTextObject from "./RichText.json";

import type { RichTextItemType } from "@udus/notion-types";
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
    richText: RichTextObject as RichTextItemType[],
  },
};
