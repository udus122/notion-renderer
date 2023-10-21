import { RichText } from "./RichText.js";
import RichTextObject from "./RichText.json";

import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";
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
    richTextItems: RichTextObject as RichTextItemResponse[],
  },
};
