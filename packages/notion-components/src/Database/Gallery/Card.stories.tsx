import Page from "../Page.json";

import { Card } from "./Card.js";

import type { PageObject } from "../../../types/notion/page.js";
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
