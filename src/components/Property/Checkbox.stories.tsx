import CheckboxPropertyObjectChecked from "./Checkbox.checked.json";
import { CheckboxProperty } from "./Checkbox.js";
import CheckboxPropertyObject from "./Checkbox.json";

import type { CheckboxPropertyItemObject } from "../../types/notion/propertyItem/checkbox.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CheckboxProperty> = {
  title: "Properties/Checkbox",
  component: CheckboxProperty,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CheckboxProperty>;

export const Default: Story = {
  args: {
    propertyItem:
      CheckboxPropertyObject as unknown as CheckboxPropertyItemObject,
  },
};

export const Checked: Story = {
  args: {
    propertyItem:
      CheckboxPropertyObjectChecked as unknown as CheckboxPropertyItemObject,
  },
};
