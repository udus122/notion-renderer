import { UniqueIdProperty } from "./UniqueId.js";
import UniqueIdPropertyObject from "./UniqueId.json";

import type { UniqueIdPropertyItemObject } from "../../types/notion/pages/properties/uniqueId.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof UniqueIdProperty> = {
  title: "Properties/UniqueId",
  component: UniqueIdProperty,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof UniqueIdProperty>;

export const Default: Story = {
  args: {
    propertyItem:
      UniqueIdPropertyObject as unknown as UniqueIdPropertyItemObject,
  },
};
