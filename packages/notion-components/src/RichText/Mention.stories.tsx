import MentionDatabaseRichTextObject from "./Mention.database.json";
import { Mention } from "./Mention";
import MentionPageRichTextObject from "./Mention.page.json";

import type { MentionRichTextItemObject } from "@udus/notion-types";
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
    richText: MentionDatabaseRichTextObject as MentionRichTextItemObject,
  },
};

export const page: Story = {
  args: {
    richText: MentionPageRichTextObject as MentionRichTextItemObject,
  },
};
