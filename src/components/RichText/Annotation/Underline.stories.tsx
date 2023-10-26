import { Underline } from "./Underline.js";
import UnderlineRichText from "./Underline.json";

import type { Meta, StoryObj } from "@storybook/react";
import type { RichTextItem } from "../../../types/notion.js";

const meta: Meta<typeof Underline> = {
  title: "Annotation/Underline",
  component: Underline,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Underline>;

export const Default: Story = {
  args: {
    richTextItem: UnderlineRichText as RichTextItem,
    children: "This is underline text",
  },
};
