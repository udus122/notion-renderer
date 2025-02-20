import { CreatedByProperty } from "@udus/notion-components";
import CreatedByPropertyObject from "./CreatedBy.json";

import type { CreatedByPropertyItemObject } from "@udus/notion-types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CreatedByProperty> = {
  title: "Properties/CreatedBy",
  component: CreatedByProperty,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CreatedByProperty>;

export const Default: Story = {
  args: {
    propertyItem:
      CreatedByPropertyObject as unknown as CreatedByPropertyItemObject,
  },
  decorators: [
    (Story) => (
      <div className="notion-root notion-light">
        <Story />
      </div>
    ),
  ],
};
