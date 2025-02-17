import { UrlProperty } from "./Url";
import UrlPropertyObject from "./Url.json";

import type { UrlPropertyItemObject } from "@udus/notion-types";
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
