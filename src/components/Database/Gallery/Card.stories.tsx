import { Card } from "./Card.js";
import CardObject from "./Card.json";

import type { Meta, StoryObj } from "@storybook/react";
import type { PageObject } from "src/types/notion/pages/page.js";

const meta: Meta<typeof Card> = {
  title: "Database/GalleryCard",
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
    page: CardObject as unknown as PageObject,
  },
};
