import { LastEditedByProperty } from "./LastEditedBy.js";
import LastEditedByPropertyObject from "./LastEditedBy.json";

import type { LastEditedByPropertyItemObject } from "../../types/notion/pages/properties/lastEditedBy.js";
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
