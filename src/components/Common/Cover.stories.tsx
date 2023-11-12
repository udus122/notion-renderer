import { Cover } from "./Cover.js";
import CoverObject from "./Cover.json";

import type { CoverObject as CoverObjectType } from "../../types/notion/common/common.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Cover> = {
  title: "Page/Cover",
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
