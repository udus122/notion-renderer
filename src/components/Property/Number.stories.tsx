import { NumberProperty } from "./Number.js";
import NumberPropertyObject from "./Number.json";

import type { NumberPropertyItemObject } from "../../types/notion/pages/properties/number.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NumberProperty> = {
  title: "Properties/Number",
  component: NumberProperty,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NumberProperty>;

export const Default: Story = {
  args: {
    propertyItem: NumberPropertyObject as unknown as NumberPropertyItemObject,
  },
};
