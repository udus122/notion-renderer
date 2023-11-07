import { FilesProperty } from "./Files.js";
import FilesPropertyObject from "./Files.json";

import type { FilesPropertyItemObject } from "../../types/notion/pages/properties/files.js";
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
