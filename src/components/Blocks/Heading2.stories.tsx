import Heading2 from "./Heading2";
import Heading2Object from "./Heading2.json";

import type { Meta, StoryObj } from "@storybook/react";
import type { Heading2BlockObjectResponse } from "notionate";

const meta: Meta<typeof Heading2> = {
  title: "Blocks/Heading2",
  component: Heading2,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Heading2>;

export const Default: Story = {
  args: {
    block: Heading2Object as Heading2BlockObjectResponse,
  },
};
