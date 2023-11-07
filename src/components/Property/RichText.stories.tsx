import { RichTextProperty } from "./RichText.js";
import RichTextPropertyObject from "./RichText.json";

import type { RichTextPropertyItemObject } from "../../types/notion/property/richText.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RichTextProperty> = {
  title: "Properties/RichText",
  component: RichTextProperty,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RichTextProperty>;

export const Default: Story = {
  args: {
    propertyItem:
      RichTextPropertyObject as unknown as RichTextPropertyItemObject,
  },
  decorators: [
    (Story) => (
      <div className="notion-root notion-light">
        <Story />
      </div>
    ),
  ],
};
