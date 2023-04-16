import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

import RichTextsObject from "./index.json";

import { RichTextList } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RichTextList> = {
  title: "RichTexts",
  component: RichTextList,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RichTextList>;

export const Default: Story = {
  args: {
    richText: RichTextsObject as RichTextItemResponse[],
  },
};
