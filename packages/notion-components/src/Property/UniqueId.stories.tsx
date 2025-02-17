import { UniqueIdProperty } from "./UniqueId";
import UniqueIdPropertyObject from "./UniqueId.json";

import type { UniqueIdPropertyItemObject } from "@udus/notion-types";
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
