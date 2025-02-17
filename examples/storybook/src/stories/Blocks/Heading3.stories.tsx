import { Heading3 } from "@udus/notion-components";
import Heading3Object from "./Heading3.json";
import Heading3Toggleable from "./Heading3.Toggleable.json";

import type { Heading3BlockObject } from "@udus/notion-types";
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
    block: Heading3Object as Heading3BlockObject,
  },
};

export const Toggleable: Story = {
  args: {
    block: Heading3Toggleable as Heading3BlockObject,
  },
};
