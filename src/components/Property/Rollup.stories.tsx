import DateRollupPropertyObject from "./Rollup.Date.json";
import { RollupProperty } from "./Rollup.js";
import NumberRollupPropertyObject from "./Rollup.Number.json";

import type { RollupPropertyItemObject } from "../../types/notion/propertyItem/rollup.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RollupProperty> = {
  title: "Property/Rollup",
  component: RollupProperty,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RollupProperty>;

export const Default: Story = {
  args: {
    propertyItem:
      NumberRollupPropertyObject as unknown as RollupPropertyItemObject,
  },
};

export const Date: Story = {
  args: {
    propertyItem:
      DateRollupPropertyObject as unknown as RollupPropertyItemObject,
  },
};
