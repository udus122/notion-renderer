import Pages from "../Pages.json";

import { List } from "./List.js";

import type { Meta, StoryObj } from "@storybook/react";
import type { PageObject } from "src/types/notion/page.js";

const meta: Meta<typeof List> = {
  title: "Database/List",
  component: List,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;

type Story = StoryObj<typeof List>;

export const Default: Story = {
  args: {
    pages: Pages as unknown as PageObject[],
  },
};

export const Dark: Story = {
  args: {
    pages: Pages as unknown as PageObject[],
  },
  decorators: [
    (Story) => (
      <div className="notion-root notion-dark">
        <Story />
      </div>
    ),
  ],
};
