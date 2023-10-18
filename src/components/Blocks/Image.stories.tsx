import { Image } from "./Image.js";
import ImageObject from "./Image.json";

import type { ImageBlockObjectComponent } from "@/types/components.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Image> = {
  title: "Blocks/Image",
  component: Image,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    block: ImageObject as ImageBlockObjectComponent,
  },
};
