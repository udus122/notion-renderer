import { EmailProperty } from "./Email";
import EmailPropertyObject from "./Email.json";

import type { EmailPropertyItemObject } from "@udus/notion-types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof EmailProperty> = {
  title: "Properties/Email",
  component: EmailProperty,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof EmailProperty>;

export const Default: Story = {
  args: {
    propertyItem: EmailPropertyObject as unknown as EmailPropertyItemObject,
  },
};
