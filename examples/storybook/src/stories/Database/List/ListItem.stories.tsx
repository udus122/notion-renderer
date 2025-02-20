import Page from "../Page.json";

import { ListItem } from "@udus/notion-components";

import type { PageObject } from "@udus/notion-types";
import type { Meta, StoryObj } from "@storybook/react";

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
