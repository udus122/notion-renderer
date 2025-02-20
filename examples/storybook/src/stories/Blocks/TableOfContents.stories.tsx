import { BlocksContext } from "@udus/notion-components";

import BlockList from "./BlockList.json";
import { TableOfContents } from "@udus/notion-components";
import TableOfContentsObject from "./TableOfContents.json";

import type { BlockBlockObject } from "@udus/notion-types";
import type { TableOfContentsBlockObject } from "@udus/notion-types";
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
