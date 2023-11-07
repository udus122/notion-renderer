import { Properties } from "./Properties.js";
import PropertiesObject from "./Properties.json";

import type { PropertyItemObject } from "../../types/notion/propertyItem/propertyItem.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Properties> = {
  title: "Properties",
  component: Properties,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Properties>;

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

export const hidePropertyName: Story = {
  args: {
    properties: PropertiesObject as unknown as Record<
      string,
      PropertyItemObject
    >,
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
