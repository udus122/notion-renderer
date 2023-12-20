import Pages from "../Pages.json";

import { Gallery } from "./Gallery.js";

import type { Meta, StoryObj } from "@storybook/react";
import type { PageObject } from "src/types/notion/page.js";

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
