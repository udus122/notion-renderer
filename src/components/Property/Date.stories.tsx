import { DateProperty } from "./Date.js";
import DatePropertyObject from "./Date.json";
import DateWithEndPropertyObject from "./Date.WithEnd.json";

import type { DatePropertyItemObject } from "../../types/notion/property/date.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DateProperty> = {
  title: "Properties/Date",
  component: DateProperty,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DateProperty>;

export const Default: Story = {
  args: {
    propertyItem: DatePropertyObject as unknown as DatePropertyItemObject,
  },
};

export const WithEnd: Story = {
  args: {
    propertyItem:
      DateWithEndPropertyObject as unknown as DatePropertyItemObject,
  },
};
