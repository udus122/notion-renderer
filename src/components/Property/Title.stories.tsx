import { TitleProperty } from "./Title.js";
import TitlePropertyObject from "./Title.json";

import type { TitlePropertyItemObject } from "../../types/notion/pages/properties/title.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TitleProperty> = {
  title: "Properties/Title",
  component: TitleProperty,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TitleProperty>;

export const Default: Story = {
  args: {
    propertyItem: TitlePropertyObject as unknown as TitlePropertyItemObject,
  },
};
