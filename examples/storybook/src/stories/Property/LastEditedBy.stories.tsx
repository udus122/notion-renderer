import { LastEditedByProperty } from "@udus/notion-components";
import LastEditedByPropertyObject from "./LastEditedBy.json";

import type { LastEditedByPropertyItemObject } from "@udus/notion-types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LastEditedByProperty> = {
  title: "Properties/LastEditedBy",
  component: LastEditedByProperty,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof LastEditedByProperty>;

export const Default: Story = {
  args: {
    propertyItem:
      LastEditedByPropertyObject as unknown as LastEditedByPropertyItemObject,
  },
  decorators: [
    (Story) => (
      <div className="notion-root notion-light">
        <Story />
      </div>
    ),
  ],
};
