import { Code } from "./Code";
import CodeObject from "./Code.json";

import type { CodeBlockObject } from "@udus/notion-types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Code> = {
  title: "Blocks/Code",
  component: Code,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Code>;

export const Default: Story = {
  args: {
    block: CodeObject as CodeBlockObject,
  },
};
