import ToDoCheckedObject from "./ToDo.Checked.json";
import { ToDo } from "./ToDo.js";
import ToDoObject from "./Todo.json";

import type { ToDoBlockObject } from "./ToDo.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ToDo> = {
  title: "Blocks/ToDo",
  component: ToDo,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ToDo>;

export const Default: Story = {
  args: {
    block: ToDoObject as ToDoBlockObject,
  },
};

export const Checked: Story = {
  args: {
    block: ToDoCheckedObject as ToDoBlockObject,
  },
};
