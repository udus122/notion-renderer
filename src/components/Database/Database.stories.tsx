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

export const Default: Story = {
  args: {
    database: DatabaseObject as DatabaseObjectType,
    pages: Pages as unknown as Array<PageObject>,
  },
  decorators: [
    (Story) => (
      <div className="notion-root notion-light">
        <Story />
      </div>
    ),
  ],
};

export const Dark: Story = {
  args: {
    database: DatabaseObject as DatabaseObjectType,
    pages: Pages as unknown as Array<PageObject>,
  },
  decorators: [
    (Story) => (
      <div className="notion-root notion-dark">
        <Story />
      </div>
    ),
  ],
};
