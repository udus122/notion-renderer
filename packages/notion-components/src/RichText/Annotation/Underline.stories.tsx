import { Underline } from "./Underline";
import UnderlineRichText from "./Underline.json";

import type { RichTextItemType } from "@udus/notion-types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Underline> = {
  title: "Annotation/Underline",
  component: Underline,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Underline>;

export const Default: Story = {
  args: {
    richTextItem: UnderlineRichText as RichTextItemType,
    children: "This is underline text",
  },
};
