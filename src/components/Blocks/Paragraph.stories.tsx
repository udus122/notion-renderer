import { Paragraph } from "./Paragraph.js";
import ParagraphObject from "./Paragraph.json";
import ParagraphWithChildrenObject from "./Paragraph.WithChildren.json";

import type { ParagraphBlockObjectComponent } from "../../types/components.js";
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
    block: ParagraphObject as ParagraphBlockObjectComponent,
  },
};

export const WithChildren: Story = {
  args: {
    block: ParagraphWithChildrenObject as ParagraphBlockObjectComponent,
  },
};
