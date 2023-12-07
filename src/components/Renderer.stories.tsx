import BlocksObject from "./Blocks/BlockList.json";
import { OpenedHeading1 } from "./Blocks/Custom/OpenedHeading1.js";
import { OpenedHeading2 } from "./Blocks/Custom/OpenedHeading2.js";
import { OpenedHeading3 } from "./Blocks/Custom/OpenedHeading3.js";
import { OpenedToggle } from "./Blocks/Custom/OpenedToggle.js";
import PageObjectData from "./Page/Page.json";
import { BlockRenderer } from "./Renderer.js";

import type { BlockBlockObject } from "../types/notion/blocks/block.js";
import type { PageObject } from "../types/notion/pages/page.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BlockRenderer> = {
  title: "Renderer",
  component: BlockRenderer,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BlockRenderer>;

export const Default: Story = {
  args: {
    page: PageObjectData as PageObject,
    blocks: BlocksObject as Array<BlockBlockObject>,
    displayProperties: [
      "Status",
      "Multi-select",
      "Text",
      "Tags",
      "Created time",
      "Last edited time",
      "Related Child database",
      "Select",
      "Date",
      "Person",
      "Number",
      "Checkbox",
      "URL",
      "Email",
      "Phone",
    ],
  },
};

export const Dark: Story = {
  args: {
    page: PageObjectData as PageObject,
    blocks: BlocksObject as Array<BlockBlockObject>,
    theme: "dark",
  },
};

export const Custom: Story = {
  args: {
    page: PageObjectData as PageObject,
    blocks: BlocksObject as Array<BlockBlockObject>,
    blockMapper: {
      toggle: OpenedToggle,
      heading_1: OpenedHeading1,
      heading_2: OpenedHeading2,
      heading_3: OpenedHeading3,
    },
  },
};
