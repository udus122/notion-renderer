import Heading3 from "./Heading3";
import Heading3Object from "./Heading3.json";

import type { Heading3BlockObjectResponseWithChildren } from "@/types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Heading3> = {
  title: "Blocks/Heading3",
  component: Heading3,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Heading3>;

export const Default: Story = {
  args: {
    block: Heading3Object as Heading3BlockObjectResponseWithChildren,
  },
};
