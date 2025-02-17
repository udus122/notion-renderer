import { Color } from "./Color";
import ColorObject from "./Color.json";

import type { RichTextItemType } from "@udus/notion-types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Color> = {
  title: "Annotation/Color",
  component: Color,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Color>;

export const Default: Story = {
  args: {
    richTextItem: ColorObject as RichTextItemType,
    children: "This is Color text",
  },
};
