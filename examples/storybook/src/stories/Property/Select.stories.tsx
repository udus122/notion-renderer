import { SelectProperty } from "@udus/notion-components";
import SelectPropertyObject from "./Select.json";

import type { SelectPropertyItemObject } from "@udus/notion-types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SelectProperty> = {
  title: "Properties/Select",
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
