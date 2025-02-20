import { Cover } from "@udus/notion-components";
import CoverObject from "./Cover.json";

import type { CoverObject as CoverObjectType } from "@udus/notion-types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Cover> = {
  title: "Common/Cover",
  component: Cover,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Cover>;

export const Default: Story = {
  args: {
    cover: CoverObject as CoverObjectType,
  },
};

export const NullCover: Story = {
  args: {
    cover: null,
  },
};
