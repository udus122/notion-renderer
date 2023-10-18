import MentionDatabaseRichTextObject from "./Mention.database.json";
import { Mention } from "./Mention.js";
import MentionPageRichTextObject from "./Mention.page.json";

import type { MentionRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Mention> = {
  title: "RichTexts/Mention",
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
