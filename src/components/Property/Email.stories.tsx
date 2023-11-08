import { EmailProperty } from "./Email.js";
import EmailPropertyObject from "./Email.json";

import type { EmailPropertyItemObject } from "../../types/notion/pages/properties/email.js";
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
