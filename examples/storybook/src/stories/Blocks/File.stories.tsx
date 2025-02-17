import FileExternalObject from "./File.External.json";
import FileFileObject from "./File.File.json";
import { File } from "@udus/notion-components";

import type { FileBlockObject } from "@udus/notion-types";
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
    block: FileFileObject as unknown as FileBlockObject,
  },
};

export const External: Story = {
  args: {
    block: FileExternalObject as unknown as FileBlockObject,
  },
};
