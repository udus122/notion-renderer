import { UrlProperty } from "./Url.js";
import UrlPropertyObject from "./Url.json";

import type { UrlPropertyItemObject } from "../../types/notion/property/url.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof UrlProperty> = {
  title: "Properties/Url",
  component: UrlProperty,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof UrlProperty>;

export const Default: Story = {
  args: {
    propertyItem: UrlPropertyObject as unknown as UrlPropertyItemObject,
  },
};
