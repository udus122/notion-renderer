import { Database } from "./Database.js";
import DatabaseObject from "./Database.json";
import Pages from "./Database.Pages.json";

import type { DatabaseObject as DatabaseObjectType } from "../../types/notion/database.js";
import type { Meta, StoryObj } from "@storybook/react";
import type { PageObject } from "src/types/notion/pages/page.js";

const meta: Meta<typeof Database> = {
  title: "Database",
  component: Database,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Database>;

export const Gallery: Story = {
  args: {
    database: DatabaseObject as DatabaseObjectType,
    pages: Pages as unknown as Array<PageObject>,
    viewType: "gallery",
  },
  decorators: [
    (Story) => (
      <div
        className="notion-root notion-light"
        style={{ minBlockSize: "100vh" }}
      >
        <Story />
      </div>
    ),
  ],
};

export const GalleryDark: Story = {
  args: {
    database: DatabaseObject as DatabaseObjectType,
    pages: Pages as unknown as Array<PageObject>,
    viewType: "gallery",
  },
  decorators: [
    (Story) => (
      <div
        className="notion-root notion-dark"
        style={{ minBlockSize: "100vh" }}
      >
        <Story />
      </div>
    ),
  ],
};

export const List: Story = {
  args: {
    database: DatabaseObject as DatabaseObjectType,
    pages: Pages as unknown as Array<PageObject>,
    viewType: "list",
  },
  decorators: [
    (Story) => (
      <div
        className="notion-root notion-light"
        style={{ minBlockSize: "100vh" }}
      >
        <Story />
      </div>
    ),
  ],
};

export const ListDark: Story = {
  args: {
    database: DatabaseObject as DatabaseObjectType,
    pages: Pages as unknown as Array<PageObject>,
    viewType: "list",
  },
  decorators: [
    (Story) => (
      <div
        className="notion-root notion-dark"
        style={{ minBlockSize: "100vh" }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Table: Story = {
  args: {
    database: DatabaseObject as DatabaseObjectType,
    pages: Pages as unknown as Array<PageObject>,
    viewType: "table",
    displayProperties: [
      "Name",
      "Text",
      "Multi-select",
      "Status",
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
  decorators: [
    (Story) => (
      <div
        className="notion-root notion-light"
        style={{ minBlockSize: "100vh" }}
      >
        <Story />
      </div>
    ),
  ],
};

export const TableDark: Story = {
  args: {
    database: DatabaseObject as DatabaseObjectType,
    pages: Pages as unknown as Array<PageObject>,
    viewType: "table",
    displayProperties: [
      "Name",
      "Text",
      "Multi-select",
      "Status",
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
  decorators: [
    (Story) => (
      <div
        className="notion-root notion-dark"
        style={{ minBlockSize: "100vh" }}
      >
        <Story />
      </div>
    ),
  ],
};
