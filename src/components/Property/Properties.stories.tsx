import { Properties } from "./Properties.js";
import PropertiesObject from "./Properties.json";

import type { Meta, StoryObj } from "@storybook/react";
import type { PropertyItemType } from "src/types/notion/property/properties.js";

const meta: Meta<typeof Properties> = {
  title: "Properties",
  component: Properties,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Properties>;

export const Default: Story = {
  args: {
    properties: PropertiesObject as unknown as Record<string, PropertyItemType>,
  },
  decorators: [
    (Story) => (
      <div className="notion-root notion-light">
        <Story />
      </div>
    ),
  ],
};

export const hidePropertyName: Story = {
  args: {
    properties: PropertiesObject as unknown as Record<string, PropertyItemType>,
    hidePropertyName: true,
  },
  decorators: [
    (Story) => (
      <div className="notion-root notion-light">
        <Story />
      </div>
    ),
  ],
};
