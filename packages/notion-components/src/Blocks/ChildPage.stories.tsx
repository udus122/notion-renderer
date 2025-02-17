import { ChildPage } from "./ChildPage";
import ChildPageObject from "./ChildPage.json";

import type { ChildPageBlockObject } from "@udus/notion-types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ChildPage> = {
  title: "Blocks/ChildPage",
  component: ChildPage,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ChildPage>;

export const Default: Story = {
  args: {
    block: ChildPageObject as unknown as ChildPageBlockObject,
  },
};
