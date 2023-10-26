import { Code } from "./Code.js";
import CodeObject from "./Code.json";

import type { Meta, StoryObj } from "@storybook/react";
import type { CodeBlockObject } from "../../types/notion.js";

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
