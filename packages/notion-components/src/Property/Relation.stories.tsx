import { RelationProperty } from "./Relation";
import RelationPropertyObject from "./Relation.json";

import type { RelationPropertyItemObject } from "@udus/notion-types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RelationProperty> = {
  title: "Properties/Relation",
  component: RelationProperty,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RelationProperty>;

export const Default: Story = {
  args: {
    propertyItem:
      RelationPropertyObject as unknown as RelationPropertyItemObject,
  },
};
