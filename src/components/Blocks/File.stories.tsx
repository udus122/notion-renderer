import FileExternalObject from "./File.External.json";
import FileFileObject from "./File.File.json";
import { File } from "./File.js";

import type { Meta, StoryObj } from "@storybook/react";
import type { FileBlockObject } from "@udus/notion-libs";

const meta: Meta<typeof File> = {
  title: "Blocks/File",
  component: File,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof File>;

export const Default: Story = {
  args: {
    block: FileFileObject as FileBlockObject,
  },
};

export const External: Story = {
  args: {
    block: FileExternalObject as FileBlockObject,
  },
};
