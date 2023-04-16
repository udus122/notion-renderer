import { MentionRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

import MentionDatabaseRichTextObject from "./index.database.json";
import MentionPageRichTextObject from "./index.page.json";

import { Mention } from "./index";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Mention> = {
  title: "RichText/Mention",
  component: Mention,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Mention>;

export const database: Story = {
  args: {
    richTextItem: MentionDatabaseRichTextObject as MentionRichTextItemResponse,
  },
};

export const page: Story = {
  args: {
    richTextItem: MentionPageRichTextObject as MentionRichTextItemResponse,
  },
};