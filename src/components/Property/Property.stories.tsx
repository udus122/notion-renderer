import { Property } from "./Property.js";
import PropertiesObject from "./Property.json";

import type { PropertyItemObject } from "../../types/notion/propertyItem/propertyItem.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Property> = {
  title: "Property",
  component: Property,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Property>;

export const Default: Story = {
  args: {
    properties: PropertiesObject as unknown as Record<
      string,
      PropertyItemObject
    >,
  },
  decorators: [
    (Story) => (
      <div className="notion-root notion-light">
        <Story />
      </div>
    ),
  ],
};
