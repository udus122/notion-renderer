import { PhoneNumberProperty } from "@udus/notion-components";
import PhoneNumberPropertyObject from "./PhoneNumber.json";

import type { PhoneNumberPropertyItemObject } from "@udus/notion-types";
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
