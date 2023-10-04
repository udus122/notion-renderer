import BlocksObject from "./Blocks.json";
import TableOfContents from "./TableOfContents";
import TableOfContentsObject from "./TableOfContents.json";

import type {
  ListComponentBlockChildrenResponse,
  TableOfContentsComponentBlockObject,
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
    block: TableOfContentsObject as TableOfContentsComponentBlockObject,
    blocks: BlocksObject as ListComponentBlockChildrenResponse,
  },
};
