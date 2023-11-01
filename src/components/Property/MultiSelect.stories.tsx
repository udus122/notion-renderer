import { MultiSelectProperty } from "./MultiSelect.js";
import MultiSelectPropertyObject from "./MultiSelect.json";

import type { MultiSelectPropertyItemObject } from "../../types/notion/propertyItem/multiSelect.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MultiSelectProperty> = {
  title: "Property/MultiSelect",
  component: MultiSelectProperty,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MultiSelectProperty>;

export const Default: Story = {
  args: {
    propertyItem:
      MultiSelectPropertyObject as unknown as MultiSelectPropertyItemObject,
  },
  decorators: [
    (Story) => (
      <div className="notion-root notion-light">
        <Story />
      </div>
    ),
  ],
};