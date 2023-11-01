import { CreatedTimeProperty } from "./CreatedTime.js";
import CreatedTimePropertyObject from "./CreatedTime.json";

import type { CreatedTimePropertyItemObject } from "../../types/notion/propertyItem/createdTime.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CreatedTimeProperty> = {
  title: "Property/CreatedTime",
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
