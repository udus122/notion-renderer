import ToDo from "./ToDo";
import ToDoCheckedObject from "./ToDo.Checked.json";
import ToDoObject from "./Todo.json";

import type { ToDoComponentBlockObject } from "@/types";
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
    block: ToDoObject as ToDoComponentBlockObject,
  },
};

export const Checked: Story = {
  args: {
    block: ToDoCheckedObject as ToDoComponentBlockObject,
  },
};
