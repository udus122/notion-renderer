import BlocksObject from "./Blocks.json";
import { TableOfContents } from "./TableOfContents.js";
import TableOfContentsObject from "./TableOfContents.json";

import type {
  BlockObject,
  TableOfContentsBlockObject,
} from "../../types/components.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TableOfContents> = {
  title: "Blocks/TableOfContents",
  component: TableOfContents,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TableOfContents>;

export const Default: Story = {
  args: {
    block: TableOfContentsObject as TableOfContentsBlockObject,
    blocks: BlocksObject as Array<BlockObject>,
  },
};
