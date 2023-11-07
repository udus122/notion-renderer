import { PhoneNumberProperty } from "./PhoneNumber.js";
import PhoneNumberPropertyObject from "./PhoneNumber.json";

import type { PhoneNumberPropertyItemObject } from "../../types/notion/propertyItem/phoneNumber.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PhoneNumberProperty> = {
  title: "Properties/PhoneNumber",
  component: PhoneNumberProperty,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PhoneNumberProperty>;

export const Default: Story = {
  args: {
    propertyItem:
      PhoneNumberPropertyObject as unknown as PhoneNumberPropertyItemObject,
  },
};
