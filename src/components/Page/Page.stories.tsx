import { Page } from "./Page.js";
import PageObject from "./Page.json";

import type { PageObject as PageObjectType } from "../../types/notion/pages/page.js";
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
    page: PageObject as PageObjectType,
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
    page: PageObject as PageObjectType,
  },
  decorators: [
    (Story) => (
      <div className="notion-root notion-dark">
        <Story />
      </div>
    ),
  ],
};
