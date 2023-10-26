import DividerObject from "./Block.Divider.json";
import { Block } from "./Block.js";
import ParagraphObject from "./Block.Paragraph.json";

import type { ParagraphBlockObject } from "../../types/notion/blocks/paragraph.js";
import type { DividerBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Block> = {
  title: "Blocks/Block",
  component: Block,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Block>;

export const Divider: Story = {
  args: {
    block: DividerObject as DividerBlockObjectResponse,
  },
};

export const Paragraph: Story = {
  args: {
    block: ParagraphObject as ParagraphBlockObject,
  },
};
