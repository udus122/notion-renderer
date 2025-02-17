import { FilesProperty } from "./Files";
import FilesPropertyObject from "./Files.json";

import type { FilesPropertyItemObject } from "@udus/notion-types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FilesProperty> = {
  title: "Properties/Files",
  component: FilesProperty,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FilesProperty>;

export const Default: Story = {
  args: {
    propertyItem: FilesPropertyObject as unknown as FilesPropertyItemObject,
  },
};
