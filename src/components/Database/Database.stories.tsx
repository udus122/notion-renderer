import { Database } from "./Database.js";
import DatabaseObject from "./Database.json";
import Pages from "./Pages.json";

import type { DatabaseObject as DatabaseObjectType } from "../../types/notion/database.js";
import type { PageObject } from "../../types/notion/page.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Database> = {
  title: "Database",
  component: Database,
  argTypes: {
    viewType: {
      options: ["table", "gallery", "list"],
      // @ts-expect-error: Storybook types are wrong
      type: "radio",
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Database>;

export const Default: Story = {
  args: {
    database: DatabaseObject as DatabaseObjectType,
    pages: Pages as unknown as Array<PageObject>,
    viewType: "gallery",
    displayProperties: [
      "Name",
      "Text",
      "e%3CoY",
      "Multi-select",
      "Status",
      "Tags",
      "Created time",
      "Last edited time",
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
        "hideDescription",
        "theme",
      ],
    },
  },
};
