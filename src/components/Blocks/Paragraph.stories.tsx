import { ParagraphBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

import { Paragraph } from "./Paragraph";
import ParagraphObject from "./Paragraph.json";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Paragraph> = {
  title: "Blocks/Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
  args: {
    block: ParagraphObject as ParagraphBlockObjectResponse,
  },
};
export const WithChildren: Story = {
  args: {
    block: ParagraphObject as ParagraphBlockObjectResponse,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    children: "I'm children",
  },
};
