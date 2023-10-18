import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";

import { Color } from "./Color.js";
import ColorObject from "./Color.json";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Color> = {
  title: "RichTexts/Color",
  component: Color,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Color>;

export const Default: Story = {
  args: {
    richTextItem: ColorObject as RichTextItemResponse,
    children: "This is Color text",
  },
};
