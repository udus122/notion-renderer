import { Gallery } from "./Gallery.js";
import GalleryObject from "./Gallery.json";

import type { Meta, StoryObj } from "@storybook/react";
import type { PageObject } from "src/types/notion/pages/page.js";

const meta: Meta<typeof Gallery> = {
  title: "Database/Gallery/Gallery",
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
    pages: GalleryObject as unknown as PageObject[],
  },
};
