import { Link } from "./Link.js";
import LinkRichText from "./Link.json";

import type { TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Link> = {
  title: "RichTexts/Link",
  component: Link,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    richTextItem: LinkRichText as TextRichTextItemResponse,
  },
};
