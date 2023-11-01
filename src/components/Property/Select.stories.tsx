import { SelectProperty } from "./Select.js";
import SelectPropertyObject from "./Select.json";

import type { SelectPropertyItemObject } from "../../types/notion/propertyItem/select.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SelectProperty> = {
  title: "Property/Select",
  component: SelectProperty,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SelectProperty>;

export const Default: Story = {
  args: {
    propertyItem: SelectPropertyObject as unknown as SelectPropertyItemObject,
  },
  decorators: [
    (Story) => (
      <div className="notion-root notion-light">
        <Story />
      </div>
    ),
  ],
};
