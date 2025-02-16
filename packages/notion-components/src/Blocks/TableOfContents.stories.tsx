import { BlocksContext } from "../hooks.js";

import BlockList from "./BlockList.json";
import { TableOfContents } from "./TableOfContents.js";
import TableOfContentsObject from "./TableOfContents.json";

import type { BlockBlockObject } from "../../types/notion/block/block.js";
import type { TableOfContentsBlockObject } from "../../types/notion/block/tableOfContents.js";
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
  },
  decorators: [
    (Story) => (
      <BlocksContext.Provider value={BlockList as Array<BlockBlockObject>}>
        <Story />
      </BlocksContext.Provider>
    ),
  ],
};
