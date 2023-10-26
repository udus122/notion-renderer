import FileExternalObject from "./File.External.json";
import FileFileObject from "./File.File.json";
import { File } from "./File.js";

import type { FileBlockObject } from "../../types/notion/blocks/file.js";
import type { Meta, StoryObj } from "@storybook/react";

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
