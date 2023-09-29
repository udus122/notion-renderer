import Heading1 from "./Heading1";
import Heading1Object from "./Heading1.json";
import Heading1Toggleable from "./Heading1.Toggleable.json";

import type { Heading1BlockObjectResponseWithChildren } from "@/types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Heading1> = {
  title: "Blocks/Heading1",
  component: Heading1,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Heading1>;

export const Default: Story = {
  args: {
    block: Heading1Object as Heading1BlockObjectResponseWithChildren,
  },
};

export const Toggleable: Story = {
  args: {
    block: Heading1Toggleable as Heading1BlockObjectResponseWithChildren,
  },
};
