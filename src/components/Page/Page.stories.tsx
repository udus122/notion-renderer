import BlocksObject from "../Blocks/BlockList.json";
import { OpenedHeading1 } from "../Blocks/Custom/OpenedHeading1.js";
import { OpenedHeading2 } from "../Blocks/Custom/OpenedHeading2.js";
import { OpenedHeading3 } from "../Blocks/Custom/OpenedHeading3.js";
import { OpenedToggle } from "../Blocks/Custom/OpenedToggle.js";

import { Page } from "./Page.js";
import PageMetaObjectData from "./PageMeta.json";

import type { BlockBlockObject } from "../../types/notion/block/block.js";
import type { PageObject } from "../../types/notion/page.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Page> = {
  title: "Page",
  component: Page,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {
  args: {
    page: PageMetaObjectData as PageObject,
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

export const Custom: Story = {
  args: {
    page: PageMetaObjectData as PageObject,
    blocks: BlocksObject as Array<BlockBlockObject>,
    blockMapper: {
      toggle: OpenedToggle,
      heading_1: OpenedHeading1,
      heading_2: OpenedHeading2,
      heading_3: OpenedHeading3,
    },
  },
  parameters: {
    controls: {
      include: [
        "viewType",
        "hideCover",
        "hideIcon",
        "hideTitle",
        "hideDescription",
        "theme",
      ],
    },
  },
};
