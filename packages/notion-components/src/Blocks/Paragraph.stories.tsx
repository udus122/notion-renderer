import { Paragraph } from "./Paragraph";
import ParagraphObject from "./Paragraph.json";
import ParagraphWithChildrenObject from "./Paragraph.WithChildren.json";

import type { ParagraphBlockObject } from "@udus/notion-types";
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
    block: ParagraphObject as ParagraphBlockObject,
  },
};

export const WithChildren: Story = {
  args: {
    block: ParagraphWithChildrenObject as ParagraphBlockObject,
  },
};
