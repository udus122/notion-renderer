import { Breadcrumb } from "./Breadcrumb.js";
import BreadcrumbObject from "./Breadcrumb.json";

import type { BreadcrumbBlockObject } from "../../types/notion/block/breadcrumb.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Breadcrumb> = {
  title: "Blocks/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    block: BreadcrumbObject as unknown as BreadcrumbBlockObject,
  },
};
