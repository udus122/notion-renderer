import ToDoCheckedObject from "./ToDo.Checked.json";
import { ToDo } from "./ToDo.js";
import ToDoObject from "./Todo.json";

import type { ToDoBlockObjectComponent } from "../../types/components.js";
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
    block: ToDoObject as ToDoBlockObjectComponent,
  },
};

export const Checked: Story = {
  args: {
    block: ToDoCheckedObject as ToDoBlockObjectComponent,
  },
};
