import { TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

import { Link } from "./Link";
import LinkRichText from "./Link.json";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Link> = {
  title: "RichTexts/Text/Link",
  component: Link,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    richTextItem: LinkRichText as TextRichTextItemResponse,
    children: "link text",
  },
};
