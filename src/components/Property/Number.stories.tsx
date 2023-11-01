import { NumberProperty } from "./Number.js";
import NumberPropertyObject from "./Number.json";

import type { NumberPropertyItemObject } from "../../types/notion/propertyItem/number.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NumberProperty> = {
  title: "Property/Number",
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