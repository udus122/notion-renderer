import { Page } from "./Page.js";
import PageMetaObjectData from "./PageMeta.json";

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
