import Page from "../Page.json";

import { ListItem } from "./ListItem.js";

import type { Meta, StoryObj } from "@storybook/react";
import type { PageObject } from "src/types/notion/pages/page.js";

const meta: Meta<typeof ListItem> = {
  title: "Database/List/ListItem",
  component: ListItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof ListItem>;

export const Default: Story = {
  args: {
    page: Page as unknown as PageObject,
  },
};
