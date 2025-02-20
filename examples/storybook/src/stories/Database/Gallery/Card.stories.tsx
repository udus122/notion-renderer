import Page from "../Page.json";

import { Card } from "@udus/notion-components";

import type { PageObject } from "@udus/notion-types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  title: "Database/Gallery/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    page: Page as unknown as PageObject,
  },
};
