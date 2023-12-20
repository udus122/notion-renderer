import { Heading1 } from "./Heading1.js";
import Heading1Object from "./Heading1.json";
import Heading1Toggleable from "./Heading1.Toggleable.json";

import type { Heading1BlockObject } from "../../types/notion/block/heading1.js";
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
    block: Heading1Object as Heading1BlockObject,
  },
};

export const Toggleable: Story = {
  args: {
    block: Heading1Toggleable as Heading1BlockObject,
  },
};
