import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

import RichTextsObject from "./index.json";

import { RichTexts } from "./index";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RichTexts> = {
  title: "RichTexts/index",
  component: RichTexts,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RichTexts>;

export const Default: Story = {
  args: {
    richText: RichTextsObject as RichTextItemResponse[],
  },
};
