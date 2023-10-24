import { Color } from "./Color.js";
import ColorObject from "./Color.json";

import type { Meta, StoryObj } from "@storybook/react";
import type { RichTextItem } from "@udus/notion-libs";

const meta: Meta<typeof Color> = {
  title: "Annotation/Color",
  component: Color,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Color>;

export const Default: Story = {
  args: {
    richTextItem: ColorObject as RichTextItem,
    children: "This is Color text",
  },
};
