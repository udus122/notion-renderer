import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

import { Link } from "./Link";
import LinkRichText from "./Link.json";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Link> = {
  title: "RichText/Annotation/Link",
  component: Link,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    richTextItem: LinkRichText as RichTextItemResponse,
    children: "link text",
  },
};
