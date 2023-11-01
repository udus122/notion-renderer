import { LastEditedTimeProperty } from "./LastEditedTime.js";
import LastEditedTimePropertyObject from "./LastEditedTime.json";

import type { LastEditedTimePropertyItemObject } from "../../types/notion/propertyItem/lastEditedTime.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LastEditedTimeProperty> = {
  title: "Property/LastEditedTime",
  component: LastEditedTimeProperty,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof LastEditedTimeProperty>;

export const Default: Story = {
  args: {
    propertyItem:
      LastEditedTimePropertyObject as unknown as LastEditedTimePropertyItemObject,
  },
};
