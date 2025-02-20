import { Properties } from "@udus/notion-components";
import PropertiesObject from "./Properties.json";

import type { PropertyItemType } from "@udus/notion-types";
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
    properties: PropertiesObject as unknown as Record<string, PropertyItemType>,
  },
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
