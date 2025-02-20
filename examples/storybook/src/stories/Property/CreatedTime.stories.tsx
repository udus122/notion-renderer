import { CreatedTimeProperty } from "@udus/notion-components";
import CreatedTimePropertyObject from "./CreatedTime.json";

import type { CreatedTimePropertyItemObject } from "@udus/notion-types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CreatedTimeProperty> = {
  title: "Properties/CreatedTime",
  component: CreatedTimeProperty,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CreatedTimeProperty>;

export const Default: Story = {
  args: {
    propertyItem:
      CreatedTimePropertyObject as unknown as CreatedTimePropertyItemObject,
  },
};
