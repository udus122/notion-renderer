import BlocksObject from "./Blocks.json";
import TableOfContents from "./TableOfContents";
import TableOfContentsObject from "./TableOfContents.json";

import type {
  ListBlockChildrenComponent,
  TableOfContentsBlockObjectComponent,
} from "@/types";
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
    block: TableOfContentsObject as TableOfContentsBlockObjectComponent,
    blocks: BlocksObject as ListBlockChildrenComponent,
  },
};
