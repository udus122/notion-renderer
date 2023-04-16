import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

import { RichTextList } from "./RichTextList";
import RichTextListObject from "./RichTextList.json";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RichTextList> = {
  title: "RichText",
  component: RichTextList,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RichTextList>;

export const Default: Story = {
  args: {
    richText: RichTextListObject as RichTextItemResponse[],
  },
};
