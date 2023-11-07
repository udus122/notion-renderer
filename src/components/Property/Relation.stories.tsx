import { RelationProperty } from "./Relation.js";
import RelationPropertyObject from "./Relation.json";

import type { RelationPropertyItemObject } from "../../types/notion/propertyItem/relation.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RelationProperty> = {
  title: "Property/Relation",
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
