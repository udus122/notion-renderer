import BlocksObject from "../Blocks/BlockList.json";

import { Page } from "./Page.js";
import PageObjectData from "./Page.json";

import type { BlockBlockObject } from "../../types/notion/block/block.js";
import type { PageObject } from "../../types/notion/page.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Page> = {
  title: "Page/Page",
  component: Page,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {
  args: {
    page: PageObjectData as unknown as PageObject,
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
  parameters: {
    controls: {
      include: [
        "viewType",
        "hideCover",
        "hideIcon",
        "hideTitle",
        "hideProperties",
        "theme",
      ],
    },
  },
};
