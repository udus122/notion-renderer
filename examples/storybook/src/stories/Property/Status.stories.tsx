import { StatusProperty } from "@udus/notion-components";
import StatusPropertyObject from "./Status.json";

import type { StatusPropertyItemObject } from "@udus/notion-types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof StatusProperty> = {
  title: "Properties/Status",
  component: StatusProperty,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof StatusProperty>;

export const Default: Story = {
  args: {
    propertyItem: StatusPropertyObject as unknown as StatusPropertyItemObject,
  },
  decorators: [
    (Story) => (
      <div className="notion-root notion-light">
        <Story />
      </div>
    ),
  ],
};
