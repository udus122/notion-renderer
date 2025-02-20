import Pages from "../Pages.json";

import { Gallery } from "@udus/notion-components";

import type { PageObject } from "@udus/notion-types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Gallery> = {
  title: "Database/Gallery",
  component: Gallery,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;

type Story = StoryObj<typeof Gallery>;

export const Default: Story = {
  args: {
    pages: Pages as unknown as PageObject[],
  },
};
